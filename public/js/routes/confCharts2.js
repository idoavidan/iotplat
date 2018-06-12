var confCharts2 = {
	data () {
		return {
			interval : '',
			chart : '',
			selectChart : ['','bar','line','map'],
			dashDefault:{minColor:'#0000FF',maxColor:'#ff0000',chart:'line',interval:604800},
			dashConfig : {},
			selectDash : this.getDash(),
			group : '',
			selectGroups : this.getGroups(),
			device : '',
			selectDevices : '',
			sensor : '',
			selectSensors : '',
			color : '',
			selectColors : '',
			min:'',
			max:'',
		}
    }, created () {
		c('created confCharts');
		vue.loader(1);
		addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
		});
    }, mounted () {
		this.$nextTick(function () {
			c('mounted confCharts');
			vue.loader(0);
		});  
    }, methods : {
		getGroups : function(){
			t = this;
			if (!vue.gs('groups')){
			vue.getData({"path":"query/groups"}, function(err,res){
				if(res){
					vue.ls(['groups',JSON.stringify(res)]);
					t.selectGroups=res;
				} else {
				c(err);
					}
			});
			} else{
			return JSON.parse(vue.gs('groups'));
			};
		}, getDash : function () {
		   return vue.gs('dash') ? JSON.parse(vue.gs('dash')) : [];
		}, dashLoad : function(){
			if (vue.el('selectDash')===null || vue.el('selectDash').value===''){
				this.$data.dashConfig=this.$data.dashDefault;
				this.destroyChart();
				return true;
			} else {
				
				return false;
			};
		}, saveDash : function () {
			var t = this;
			var data = this.$data.dashConfig;
			if(!data.sensor){vue.showModAlert('No sensors');return;} ;
			data.name = data.name || (data.group+data.device+data.sensor);
			if(!data.sensor){
				vue.showModAlert('No sensors');
				return;
			} else{
				vue.getData({"path":"query/saveGraph","username":"ido","graph":data}, function(err,res){
				if(res){
					vue.showModAlert('dashboard saved');
					var d = t.getDash();
					var pos = d.findIndex(o => o.name === data.name);
				if (pos!=-1){
					d[pos]=data;	
				} else{
					d.push(data);
				};
				vue.ls(['dash',JSON.stringify(d)]) ;
				} else {
					vue.showModAlert('dashboard not saved, see log');
					c(err);
				}
			});
			}
		}, getGroup : function(){
			t  = this;
			if (!vue.gs('group_'+t.$data.dashConfig.group)){
			vue.getData({"path":"query/group","group_id":t.$data.dashConfig.group}, function(err,res){
				if (res){
				vue.ls(['group_'+t.$data.dashConfig.group,JSON.stringify(res.group_devices)]);
				t.$data.selectDevices=res.group_devices;
				}
			});
			} else {
			t.$data.selectDevices = JSON.parse(vue.gs('group_'+t.$data.dashConfig.group));
			};
		}, changeDevice : function(){
			this.$data.selectSensors=this.$data.selectDevices.filter(({device_id}) => device_id === this.$data.dashConfig.device)[0].device_sensors;
		}, changeChart : function(){	    
			d = this.$data.dashConfig;
			if(d.interval && d.sensor){
			var dt= Date.now();
			vue.getData({"path":"query/feedsByIndex","index":"sensor","value":d.sensor,
				"from":dt/1000-d.interval,"to":dt/1000}
			, function(err,res){
				if (res && res.length>0){
				c(res)
				t.showChart(res);
				} else if ( res && res.length===0){
				vue.showModAlert('No data found');
				} else if (err){
				c(err);
				}
			});
			};
		}, destroyChart : function(){
			if (mainChart && vue.el("mainChart")){mainChart.destroy(); c('main');vue.el("mainChart").innerHTML="";}; 
		}, showChart : function(msg){
			var ddd = this.$data.dashConfig;
			var labels = [];
			var data = [];
			var dataColor = [];
			var type = ddd.chart ? ddd.chart : this.$data.selectChart[0];
			// console.log(msg," ido")
			msg.map(o => {
				d = new Date(o.time*1000); // The 0
				labels.push(String(d.getHours()).padStart(2,"0")+':'+String(d.getMinutes()).padStart(2,"0")+':'+String(d.getSeconds()).padStart(2,"0"));
				data.push(o.data);
				if(o.data<ddd.min){
					dataColor.push(ddd.minColor);
				} else if(o.data>ddd.max){
					dataColor.push(ddd.maxColor);
				} else{
					dataColor.push(ddd.color||'black');
				};
			});
			this.destroyChart();
			mainChart = new Chart( vue.el('mainChart').getContext('2d'), {
			type: type,
			data: {
				labels: labels,
				datasets: [{
					type: type,
					fill:false,
					label: ddd.group+'-'+ddd.device+'-'+ddd.sensor,
					data: data,
					pointBackgroundColor: dataColor,
					backgroundColor : dataColor,
					fillColors : dataColor, 
					borderWidth: 1
				}]
			}, options: {
				responsive: true,
				legend: {
				labels: {
					fontColor: "black",
					fontSize: 36
				}
				},
				scales: {
				yAxes: [{
					ticks: {
					beginAtZero: true
					}
				}],
				xAxes: [{
					ticks: {
					fontColor: "black",
					fontSize: 24,
					stepSize: ddd.interval,
					beginAtZero: true
					}
				}]
				}
			}
			});
		}
    }, template :
	`<div class="appMain">
	    <div class="mainMenu">
		<div><div><span v-html="icon('dashboard')"></span><label>dashboard</label></div><select id="selectDash" v-model="dashConfig" ><option selected value></option><option v-for="i in selectDash" :value="i">{{i.name}}</option></select></div>
		<div><div><span v-html="icon('text-size')"></span><label>name</label></div><input id="nameDash" type="text" v-model="dashConfig.name"></input></div>
		<div><div><span v-html="icon('arrow-down')"></span><label>save</label></div><button v-bind:disabled="!dashConfig.sensor" id="saveDash" @click.prevent="saveDash"><span v-html="icon('arrow-down')"></button></div>
		<div><div><span v-html="icon('package')"></span><label>groups</label></div>
		    <select v-if="dashLoad()" id="selectGroup" v-model="dashConfig.group" @change="getGroup()"><option selected value></option><option v-for="i in selectGroups" :value="i.group_id">{{i.group_id}}</option></select>
		    <input v-else id="selectGroup" v-model="dashConfig.group" readonly></input>
		</div>
		<div><div><span v-html="icon('device-mobile')"></span><label>devices</label></div>
		    <select v-if="dashLoad()" id="selectDevice" v-model="dashConfig.device" @change="changeDevice()"><option selected value></option><option v-for="i in selectDevices" :value="i.device_id">{{i.device_id}}</option></select>
		    <input v-else id="selectDevice" v-model="dashConfig.device" readonly></input>
		</div>
		<div><div><span v-html="icon('pulse')"></span><label>sensors</label></div>
		    <select v-if="dashLoad()" id="selectSensor" v-model="dashConfig.sensor" @change="changeChart()"><option selected value></option><option v-for="i in selectSensors" :value="i.sensor_id">{{i.sensor_id}}</option></select>
		    <input v-else id="selectSensor" v-model="dashConfig.sensor" readonly>{{changeChart()}}</input>
		</div>	
		<div><div><span v-html="icon('calendar')"></span><label>from</label></div><input id="fromSelect" type="date" placeholder="from"></input></div>
		<div><div><span v-html="icon('calendar')"></span><label>to</label></div><input id="toSelect" type="date" placeholder="to"></input></div>
		<div><div><span v-html="icon('clock')"></span><label>interval</label></div><select id="vue.$data.selectInterval" v-model="dashConfig.interval" @change="changeChart()"><option v-for="i in vue.$data.selectInterval" :value="i">{{moment.duration(i,"seconds").humanize()}}</option></select></div>	
		<div><div><span v-html="icon('graph')"></span><label>chart</label></div><select id="selectChart" v-model="dashConfig.chart" @change="changeChart()"><option v-for="i in selectChart" :value="i">{{i}}</option></select></div>
		<div><div><span v-html="icon('pencil')"></span><label>chart color</label></div><input id="selectColor" type="color" v-model="dashConfig.color"></input></div>
		<div></div>
		<div><div><span v-html="icon('dash')"></span><label>minimum</label></div><input id="min" type="number" v-model="dashConfig.min"></input></div>
		<div><div><span v-html="icon('pencil')"></span><label>min color</label></div><input id="minColor" type="color" v-model="dashConfig.minColor"></input></div>
		<div></div>
		<div><div><span v-html="icon('plus-small')"></span><label>maximum</label></div><input id="min" type="number" v-model="dashConfig.max"></input></div>
		<div><div><span v-html="icon('pencil')"></span><label>max color</label></div><input id="maxColor" type="color" v-model="dashConfig.maxColor"></input></div>
		<div></div>
	    </div>
	    <div class="mainMain">
		<canvas id="mainChart"></canvas>
	    </div>
	</div>`
};