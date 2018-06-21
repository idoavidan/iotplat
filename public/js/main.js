var blank = {
    created : function(){
	vue.$data.isLoader=true;
	c('created blank')
    }, mounted : function () {
	c('mounted balnk')
	vue.$data.isLoader=false;
    }, template :`<div></div>`
};
var conf = {
    created (){
		vue.$data.isLoader=true;
		c('created conf')
    }, mounted () {
	    c('mounted conf')
	    vue.$data.isLoader=false;
    }, template : `<div>Configuration<div>`
};
var temp=[{"_id":"5b28cbde5ed4d5001ee77f43","time":"1529400282187","timeS":"1529400286195","device_id":"pi0-10","sensor_id":"am2302H","data":"88.4"},
{"_id":"5b28cbff5ed4d5001ee77f44","time":"1529400317021","timeS":"1529400319032","device_id":"pi0-10","sensor_id":"am2302T","data":"20.6"},
{"_id":"5b28cc015ed4d5001ee77f45","time":"1529400317021","timeS":"1529400321143","device_id":"pi0-10","sensor_id":"am2302H","data":"88.1"},
{"_id":"5b28cc7f5ed4d5001ee77f46","time":"1529400445255","timeS":"1529400447454","device_id":"pi0-10","sensor_id":"am2302T","data":"20.6"},
{"_id":"5b28cc815ed4d5001ee77f47","time":"1529400445255","timeS":"1529400449591","device_id":"pi0-10","sensor_id":"am2302H","data":"88.1"},
{"_id":"5b28cca95ed4d5001ee77f48","time":"1529400488023","timeS":"1529400489899","device_id":"pi0-10","sensor_id":"am2302T","data":"20.6"},
{"_id":"5b28ccac5ed4d5001ee77f49","time":"1529400488023","timeS":"1529400492050","device_id":"pi0-10","sensor_id":"am2302H","data":"88.5"},
{"_id":"5b28ccd15ed4d5001ee77f4a","time":"1529400527942","timeS":"1529400529855","device_id":"pi0-10","sensor_id":"am2302T","data":"20.6"},
{"_id":"5b28ccd35ed4d5001ee77f4b","time":"1529400527942","timeS":"1529400531960","device_id":"pi0-10","sensor_id":"am2302H","data":"88.7"},
{"_id":"5b28ccf75ed4d5001ee77f4c","time":"1529400565322","timeS":"1529400567193","device_id":"pi0-10","sensor_id":"am2302T","data":"20.6"},
{"_id":"5b28ccf95ed4d5001ee77f4d","time":"1529400565322","timeS":"1529400569381","device_id":"pi0-10","sensor_id":"am2302H","data":"87.4"},
{"_id":"5b28cd1a5ed4d5001ee77f4e","time":"1529400600214","timeS":"1529400602135","device_id":"pi0-10","sensor_id":"am2302T","data":"20.6"},
{"_id":"5b28cd1c5ed4d5001ee77f4f","time":"1529400600214","timeS":"1529400604287","device_id":"pi0-10","sensor_id":"am2302H","data":"87.3"},
{"_id":"5b28ce1d5ed4d5001ee77f50","time":"1529400859306","timeS":"1529400861276","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28ce1f5ed4d5001ee77f51","time":"1529400859306","timeS":"1529400863427","device_id":"pi0-10","sensor_id":"am2302H","data":"88.8"},
{"_id":"5b28ce405ed4d5001ee77f52","time":"1529400894260","timeS":"1529400896104","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28ce425ed4d5001ee77f53","time":"1529400894260","timeS":"1529400898236","device_id":"pi0-10","sensor_id":"am2302H","data":"88.9"},
{"_id":"5b28ce6a5ed4d5001ee77f54","time":"1529400936678","timeS":"1529400938577","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28ce6c5ed4d5001ee77f55","time":"1529400936678","timeS":"1529400940767","device_id":"pi0-10","sensor_id":"am2302H","data":"88.7"},
{"_id":"5b28ce9c5ed4d5001ee77f56","time":"1529400986795","timeS":"1529400988715","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28ce9e5ed4d5001ee77f57","time":"1529400986795","timeS":"1529400990843","device_id":"pi0-10","sensor_id":"am2302H","data":"89.6"},
{"_id":"5b28cebf5ed4d5001ee77f58","time":"1529401021689","timeS":"1529401023549","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28cec15ed4d5001ee77f59","time":"1529401021689","timeS":"1529401025667","device_id":"pi0-10","sensor_id":"am2302H","data":"89.7"},
{"_id":"5b28cefe5ed4d5001ee77f5a","time":"1529401084356","timeS":"1529401086360","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28cf005ed4d5001ee77f5b","time":"1529401084356","timeS":"1529401088504","device_id":"pi0-10","sensor_id":"am2302H","data":"88.9"},
{"_id":"5b28cf6c5ed4d5001ee77f5c","time":"1529401194916","timeS":"1529401196821","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28cf6e5ed4d5001ee77f5d","time":"1529401194916","timeS":"1529401198994","device_id":"pi0-10","sensor_id":"am2302H","data":"88.4"},
{"_id":"5b28cfa95ed4d5001ee77f5e","time":"1529401255114","timeS":"1529401257011","device_id":"pi0-10","sensor_id":"am2302T","data":"20.7"},
{"_id":"5b28cfab5ed4d5001ee77f5f","time":"1529401255114","timeS":"1529401259144","device_id":"pi0-10","sensor_id":"am2302H","data":"86.3"},
{"_id":"5b28cfd55ed4d5001ee77f60","time":"1529401300102","timeS":"1529401301954","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28cfd85ed4d5001ee77f61","time":"1529401300102","timeS":"1529401304093","device_id":"pi0-10","sensor_id":"am2302H","data":"86"},
{"_id":"5b28d0025ed4d5001ee77f62","time":"1529401345065","timeS":"1529401346969","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28d0055ed4d5001ee77f63","time":"1529401345065","timeS":"1529401349317","device_id":"pi0-10","sensor_id":"am2302H","data":"88.6"},
{"_id":"5b28d02b5ed4d5001ee77f64","time":"1529401385252","timeS":"1529401387180","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28d02d5ed4d5001ee77f65","time":"1529401385252","timeS":"1529401389319","device_id":"pi0-10","sensor_id":"am2302H","data":"88.2"},
{"_id":"5b28d04e5ed4d5001ee77f66","time":"1529401420165","timeS":"1529401422099","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28d0505ed4d5001ee77f67","time":"1529401420165","timeS":"1529401424238","device_id":"pi0-10","sensor_id":"am2302H","data":"88.2"},
{"_id":"5b28d0c95ed4d5001ee77f68","time":"1529401543304","timeS":"1529401545415","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28d0cb5ed4d5001ee77f69","time":"1529401543304","timeS":"1529401547574","device_id":"pi0-10","sensor_id":"am2302H","data":"86.4"},
{"_id":"5b28d0f35ed4d5001ee77f6a","time":"1529401585997","timeS":"1529401587873","device_id":"pi0-10","sensor_id":"am2302T","data":"20.8"},
{"_id":"5b28d0f55ed4d5001ee77f6b","time":"1529401585997","timeS":"1529401589995","device_id":"pi0-10","sensor_id":"am2302H","data":"88.2"},
{"_id":"5b28d1255ed4d5001ee77f6c","time":"1529401636016","timeS":"1529401637937","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d1285ed4d5001ee77f6d","time":"1529401636016","timeS":"1529401640097","device_id":"pi0-10","sensor_id":"am2302H","data":"88.6"},
{"_id":"5b28d14b5ed4d5001ee77f6e","time":"1529401673463","timeS":"1529401675369","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d14d5ed4d5001ee77f6f","time":"1529401673463","timeS":"1529401677547","device_id":"pi0-10","sensor_id":"am2302H","data":"88"},
{"_id":"5b28d1825ed4d5001ee77f70","time":"1529401728599","timeS":"1529401730461","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d1845ed4d5001ee77f71","time":"1529401728599","timeS":"1529401732785","device_id":"pi0-10","sensor_id":"am2302H","data":"87.2"},
{"_id":"5b28d1be5ed4d5001ee77f72","time":"1529401788976","timeS":"1529401790920","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d1c15ed4d5001ee77f73","time":"1529401788976","timeS":"1529401793085","device_id":"pi0-10","sensor_id":"am2302H","data":"87.2"},
{"_id":"5b28d1e45ed4d5001ee77f74","time":"1529401826443","timeS":"1529401828328","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d1e65ed4d5001ee77f75","time":"1529401826443","timeS":"1529401830515","device_id":"pi0-10","sensor_id":"am2302H","data":"85.1"},
{"_id":"5b28d20f5ed4d5001ee77f76","time":"1529401868952","timeS":"1529401871051","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d2115ed4d5001ee77f77","time":"1529401868952","timeS":"1529401873231","device_id":"pi0-10","sensor_id":"am2302H","data":"87.6"},
{"_id":"5b28d23c5ed4d5001ee77f78","time":"1529401914182","timeS":"1529401916144","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d23e5ed4d5001ee77f79","time":"1529401914182","timeS":"1529401918285","device_id":"pi0-10","sensor_id":"am2302H","data":"86.9"},
{"_id":"5b28d25e5ed4d5001ee77f7a","time":"1529401949110","timeS":"1529401950975","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d2615ed4d5001ee77f7b","time":"1529401949110","timeS":"1529401953141","device_id":"pi0-10","sensor_id":"am2302H","data":"87"},
{"_id":"5b28d2895ed4d5001ee77f7c","time":"1529401991558","timeS":"1529401993506","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d28b5ed4d5001ee77f7d","time":"1529401991558","timeS":"1529401995663","device_id":"pi0-10","sensor_id":"am2302H","data":"86.9"},
{"_id":"5b28d2b95ed4d5001ee77f7e","time":"1529402039144","timeS":"1529402041062","device_id":"pi0-10","sensor_id":"am2302T","data":"20.9"},
{"_id":"5b28d2bb5ed4d5001ee77f7f","time":"1529402039144","timeS":"1529402043348","device_id":"pi0-10","sensor_id":"am2302H","data":"87.5"}];
var confCharts = {
	data () {
		return {
			activeTab:0,
			selectChart : vue.selectChart,
			chartFields:[
				{'field':'name',"type":"text","required":"false","default":""},
				{'field':'group_name',"type":"select","required":"true","default":""},
				{'field':'device_id',"type":"select","required":"true","default":""},
				{'field':'sensor_id',"type":"select","required":"true","default":""},
				{'field':'interval',"type":"time","required":"true","default":1800},
				{'field':'chart',"type":"select","required":"true","default":vue.selectChart[0]},
				{'field':'color',"type":"color","default":"#00a600"},
				{'field':'min',"type":"number","default":""},
				{'field':'minColor',"type":"color","default":"#0000FF"},
				{'field':'max',"type":"number"},
				{'field':'maxColor',"type":"color","default":"#ff0000"}
			],
			dashConfig : {},
			dashConfigHist : [],
			selectDash : [],
			selectGroups : this.getGroups(),
			isMounted:false
		}
    },computed: {
	}, created () {
		c('created confCharts');
		vue.$data.isLoader=true;
		addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
		});
    }, mounted () {
		var t=this;
		t.$nextTick(function () {
			t.$data.dashConfig = t.getDefault();
			t.$data.isMounted=true;
			t.$data.selectDash=this.getDash();
			c('mounted confCharts');
			vue.$data.isLoader=false;
		});  
    }, methods : {
		device(){
			var d =this.$data;
			var x =  d.selectGroups.find(o=>o.group_name===d.dashConfig.group_name) 
			return x!==undefined ? x.group_devices : [{"device_id":""}];
		}, sensor(){
			var t=this;
			var d =t.$data;
			var x = t.device().find(o=>o.device_id===d.dashConfig.device_id);
			return x!==undefined ? x.device_sensors : {};
		}, required (){
			f=this.$data.chartFields.filter(o => o.required === "true" )
			this.$data.dashConfig.find
			e=f.map(o=> 
				this.$data.dashConfig[o.field] !==undefined && ['',null,undefined].indexOf(this.$data.dashConfig[o.field])===-1
			);
			return e.indexOf(false)!==-1  ? false : true;
		}, getDefault(){
			d = this.$data;
			var n={};
			d.chartFields.map(o=>{
				n[o.field]=o.default ? o.default : "";
			});	
			return n;
		}, getGroups (){
			t = this;
			if (!vue.gs('groups')){
			vue.getData({"path":"query/groups"}, function(err,
			){
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
		}, getDash  () {
			var n=[this.getDefault()];
			return vue.gs('dash') ? n.concat(JSON.parse(vue.gs('dash'))) : n;
		}, dashLoad (){
			vue.tstS('dashload')
			if (vue.el('selectDash')===null || vue.el('selectDash').value===''){
				// this.$data.dashConfig=this.$data.dashDefault;
				this.destroyChart();
			} else {
				this.$data.dashConfig=vue.el('selectDash').value;
			};
		}, saveDash  () {
			var t = this;
			var data = t.$data.dashConfig;
			data.name = data.name || (data.group_name+data.device_id+data.sensor_id);
			vue.getData({"path":"query/saveGraph","graph=":data}, function(err,res){
				if(res){
					vue.tstS('Saved');
					var d = vue.gs('dash') ? JSON.parse(vue.gs('dash')) : [];
					var pos = d.findIndex(o => o.name === data.name);
					if (pos!=-1){
						d[pos]=data;	
					} else{
						d.push(data);
					};
					vue.ls(['dash',JSON.stringify(d)]);
					t.$data.selectDash=t.getDash();
					t.hist('s');
				} else {
					vue.tstW('dashboard not saved, see log');
					c(err);
				}
			});
		},	hist(e){
			var d = this.$data;
			if (e==='s'){
				d.dashConfigHist[1]=(JSON.stringify(d.dashConfig))
			}
			else{
				if(d.dashConfigHist.length===2){
					d.selectDash[d.dashConfigHist[0]]=JSON.parse(d.dashConfigHist[1]);
				}
				d.dashConfigHist[0]=(d.selectDash.findIndex(o=>o==e))
				d.dashConfigHist[1]=(JSON.stringify(e))
			}
		}, changeChart (){	    
			vue.$data.isLoader=true;
			var t=this;
			var d = t.$data.dashConfig;
			if(t.required){
			var dt= Date.now();
			// t.showChart(temp)
			vue.getData({"path":"query/feedsByIndex","parent":"device_id","parentVal":d.device_id,
				"from":(dt-d.interval*1000),"to":dt}
			, function(err,res){
				vue.$data.isLoader=false;
				if (res && res.length>0){
						t.showChart(res);
				} else if (res){
					t.destroyChart();
					vue.tstW('No data found');
				} else if (err){
					c(err);
				}
			});
			} else{
				vue.tstW('not enough parameters');
			};
		}, destroyChart (){
			if (mainChart && vue.el("mainChart")){mainChart.destroy();vue.el("mainChart").innerHTML="";}; 
		}, showChart (msg){
			vue.$data.isLoader=true;
			var datasets=[];
			var ddd = this.$data.dashConfig;
			c(ddd)
			var dataset={label:ddd.group_name+'-'+ddd.device_id+'-'+ddd.sensor_id,
			borderWidth:1};	
			c(dataset);
			t.sensor().map( o=> {
				c(o.sensor_id)
				var x = msg.filter(rr => rr.sensor_id ===o.sensor_id);
				c(x);
				var dataset={label:ddd.group_name+'-'+ddd.device_id+'-'+o.sensor_id, borderWidth:1};
				dataset.labels = [];
				dataset.data = [];
				dataset.dataColor = [];
				if (['pie','doughnut','map'].indexOf(dataset.type) ===-1){
					c(x)
					x.map(ox => {
						d = new Date(o.timeS); // The 0
						dataset.labels.push(moment(d))
						dataset.data.push(ox.data);
							if(ddd.min !=="" && ox.data<ddd.min){
								dataset.dataColor.push(ddd.minColor);
							} else if(ddd.max !=="" && ox.data>ddd.max){
								dataset.dataColor.push(ddd.maxColor);
							} else{
								dataset.dataColor.push(ddd.color||'black');
							}
						})
				} else{
					if(ddd.min !==""){
						dataset.dataColor.push(ddd.minColor)
						var m = x.filter(({data}) => data < ddd.min).length;
						dataset.data.push(m);
						dataset.labels.push('min-'+m||0);
					}
					if(ddd.max !==""){
						dataset.dataColor.push(ddd.maxColor)
						var m = x.filter(({data}) => data > ddd.max).length;
						dataset.data.push(m);
						labels.push('max-'+m||0)
					}
					var m = x.length - (data[0]||0)-(data[1]||0);
					dataset.dataColor.push(ddd.color);
					dataset.data.push(m);
					dataset.labels.push('ok-'+m||0);
					dataset.labels.push('total-'+msg.length);
				}
				dataset.pointBackgroundColor = dataset.dataColor,
				dataset.backgroundColor =dataset.dataColor,
				dataset.fillColors =dataset.dataColor,
				datasets.push(dataset)
				c(datasets)
				c(dataset)
			});
			c('destory');
			c(datasets)
			this.destroyChart();
			mainChart = new Chart( vue.el('mainChart').getContext('2d'), {
			type: ddd.chart ? ddd.chart : this.$data.selectChart[0],
			data: {
				labels: datasets[0].labels,
				datasets: datasets
			}, options: {
				responsive: true,
				legend: {
				labels: {
					fontColor: "black",
					fontSize: 24
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
							beginAtZero: true
						}
					}]
				}
			}
			});
			vue.$data.isLoader=false;
		},changeTab : function (){
			tab = this.$data.activeTab;
			if(tab===4){
				this.changeChart();
			} else if (tab===5){
				this.saveDash();
			}
		}
    }, template :
	`<div class="tile is-ancestor">
		<b-tabs type="is-boxed" v-model="activeTab" @change="changeTab()" v-if="isMounted">
			<b-tab-item  class="is-dark">
			<template  slot="header">
                <b-icon icon="information-outline"></b-icon>
                <span > Dashboards <b-tag rounded> {{selectDash.length-1}} </b-tag> </span>
            </template>
				<b-field label="Dashboard">
					<b-select id="selectDash" v-model="dashConfig" @input="hist">
						<option
							v-for="o in selectDash"
							:value="o">
							{{o.name}}
					</option>
				</b-select>
				</b-field>
				<b-field label="Name">
					<b-input v-model="dashConfig.name">{{dashConfig.name}}</b-input>
				</b-field>
				<p class="control">
				<button class="button is-danger is-medium " v-bind:disabled="!required()" id="saveDash" @click.prevent="saveDash">
				<b-icon icon="delete"></b-icon></button></button></p>
			</b-tab-item>
			<b-tab-item label="Groups" icon="group">
			<b-field grouped>
			<b-field label="Group" class="column is-3" type="is-warning">
				<b-select id="group_name" v-model="dashConfig.group_name">
					<option selected></option>
					<option
						v-for="o in selectGroups"
						:value="o.group_name">
						{{o.group_name}}
					</option>
				</b-select>
			</b-field>
			<b-field label="Device" class="column is-3" type="is-warning">
				<b-select id="device_id" v-model="dashConfig.device_id">
					<option v-if="dashConfig.group_name===''"></option>
					<option v-else v-for="o in device()"
						:value="o.device_id">	
						{{o.device_name}}
					</option>
				</b-select>
			</b-field>
			<b-field label="Sensor" class="column is-4" type="is-warning">
				<b-select id="sensor_id" v-model="dashConfig.sensor_id">
					<option v-if="dashConfig.device_id===''"></option>
					<option v-else=""
						v-for="o in sensor()"
						:value="o.sensor_id">	
						{{o.sensor_id}}
					</option>
				</b-select>
			</b-field>
			</b-field>
			</b-tab-item>
			<b-tab-item label="Chart" icon="finance">
			<section class="columns">
			<b-field grouped>
			<b-field label="Chart" class="column is-4" type="is-warning">
				<b-select id="chart" v-model="dashConfig.chart">
					<option
						v-for="o in selectChart"
						:value="o">
						{{o}}
					</option>
				</b-select>
			</b-field>
			<b-field label="Interval" class="column is-4" type="is-warning">
				<b-select id="interval" v-model="dashConfig.interval">
					<option
						v-for="o in vue.$data.selectInterval"
						:value="o">
						{{moment.duration(o,"seconds").humanize()}}
					</option>
				</b-select>
			</b-field>
			<b-field label="Color" class="column is-4">
				<input id="color" type="color" v-model="dashConfig.color"></input>
			</b-field>
			</b-field>
		</section>
		<section class="columns">
		<b-field grouped>
			<b-field label="Minimum" class="column is-5">
				<input type="number" id="min" v-model="dashConfig.min"></input>
			</b-field>
			<b-field label="Color" class="column is-5">
				<input id="minColor" type="color" v-model="dashConfig.minColor"></input>
			</b-field>
			</b-field>
		</section>
		<section class="columns">
		<b-field grouped>
			<b-field label="Maximum" class="column is-5">
				<input type="number" id="max" v-model="dashConfig.max"></input>
			</b-field>
			<b-field label="Color" class="column is-5">
				<input id="maxColor" type="color" v-model="dashConfig.maxColor"></input>
			</b-field>
		</section>
			</b-tab-item>
			<b-tab-item label="Alerts" icon="alert">
			</b-tab-item>
			<b-tab-item icon="eye" :disabled="!required()">
				<canvas id="mainChart"></canvas>
			</b-tab-item>
			<b-tab-item icon="content-save" :disabled="!required()">
				<canvas id="mainChart"></canvas>
			</b-tab-item>
		</b-tabs>	
	    </div>
	</div>`
};
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
var confGroups = {
	data () {
		return {
			defaultSortDirection: 'desc',
			group : '',
			activeTab :0,
			groupColumns: [{
				field: 'group_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'group_name',
				label: 'Name',
				width: '40',
				sortable : true,
				centered : true
			}],
			selectGroups : '',
			device : '',
			deviceColumns: [{
				field: 'device_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'device_name',
				label: 'Name',
				width: '40',
				centered: true,
				sortable : true,
			}],
			sensor : '',
			sensorColumns: [{
				field: 'sensor_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'sensor_name',
				label: 'Name',
				width: '40',
				centered: true,
				sortable : true,
			}],
			selectSensors : '',
		}
    }, created () {
		c('created confGroups');
		vue.$data.isLoader=true;
    }, mounted () {
		this.$nextTick(function () {
			c('mounted confGroups');			
		});  
		this.getGroups();
    }, methods : {
		getGroups : function(){
			t = this;
			vue.$data.isLoader=true;
			vue.getData({"path":"query/groups"}, function(err,res){
				if(res){
					vue.ls(['groups',JSON.stringify(res)]);
					t.$data.selectGroups = res;
				} else {
					c(err);
				}
				vue.$data.isLoader=false;
			});
		}
    }, template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="">
			<b-tab-item label="Groups" icon="group">
			<b-tabs type="is-boxed" @change="">
			<b-tab-item label="New" icon="group">
				<b-table bordered narrowed
				:data="selectGroups"
				:columns="groupColumns"
				focusable class="column"
				:selected.sync="group"
				></b-table>
			</b-tab-item>
			<b-tab-item label="Groups" icon="group">
				<b-table bordered narrowed
				:data="selectGroups"
				:columns="groupColumns"
				focusable class="column"
				:selected.sync="group"
				></b-table>
			</b-tab-item>
			<b-tab-item label="Edit" icon="group">
				<b-table bordered narrowed
				:data="selectGroups"
				:columns="groupColumns"
				focusable class="column"
				:selected.sync="group"
				></b-table>
			</b-tab-item>
			</b-tabs>
			</b-tab-item>
			<b-tab-item label="Devices" icon="cellphone-link">
			<b-table
				:data="group.group_devices"
				:columns="deviceColumns"
				focusable class="column"
				:selected.sync="device">
			</b-table>
			</b-tab-item>
			<b-tab-item label="Sensors" icon="heart-pulse">
				<b-table
				:data="device.device_sensors"
				:columns="sensorColumns"
				focusable class="column"
				:selected.sync="sensor"
			></b-table>
			</b-tab-item>
		</b-tabs>
		</div>`
};
var confUsers = {
	data () {
		return {
			activeTab: 1,
			user : null,
			tabColumns: [{
				field: 'username',
				label: 'Username',
				width: '40',
				sortable : true,
				centered: true
			},{
				field: 'first_name',
				label: 'Name',
				width: '40',
				sortable : true,
				centered : true
			},{
				field: 'last_name',
				label: 'Surname',
				width: '40',
				sortable : true,
				centered : true
			},{
				field: 'email',
				label: 'Email',
				width: '40',
				sortable : true,
				centered : true
			},{
				field: 'active',
				label: 'Active',
				width: '40',
				sortable : true,
				centered : true
			},],
			selectUser :[],
		}
    }, created (){
	    vue.$data.isLoader=true;
	    c('created confUsers');
    }, mounted () {
	    this.$nextTick(function () {
			c('mounted confCharts');
			this.getUsers();
			Vue.component('userAdmin', userAdmin);
		});  
    }, methods : {
		getUsers : function () {
			vue.$data.isLoader=true;
			data = this.$data;
			vue.getData({"path":"query/users"}, function(err,res){
				vue.$data.isLoader=false;
				if(res){
					c(res)
					data.selectUser=res;
				} else {
					vue.showModAlert('could not find users');
				};
			});
		}
	}, template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="if(activeTab===0){user=null}">
			<b-tab-item label="New" icon="account-plus">
				<userAdmin v-bind="user"></userAdmin>
			</b-tab-item>
			<b-tab-item label="Users" icon="account-multiple">
				<b-table bordered
					narrowed
					:data="selectUser"
					:columns="tabColumns"
					focusable class="column"
					:selected.sync="user">
				</b-table>
			</b-tab-item>
			<b-tab-item label="Edit" icon="account-edit" :disabled="user===null">
				<userAdmin v-bind="user"></userAdmin>
			</b-tab-item>
		</b-tabs>
	</div>`
};
var tttt;
var dash = {
	data () {
		return	{
			interval : '',
			chart : '',
			selectChart: vue.selectChart,
			dashConfig : '',
			selectDash : this.getDash(),
			charts:{}
		}
	}, created : function(){
		vue.$data.isLoader=true;
		c('created dash');
		var t = this;
		addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
			t.loopDash();
			// t.timeDash();
		});
	}, mounted : function () {
		vue.$data.isLoader=false;
		c('mounted dash')
	}, methods : {
		timeDash : function(){
			t=this;
			t.loopDash();
			clearTimeout(tttt)
			tttt=setTimeout(t.timeDash, 300000);
		}, loopDash : function(){
			vue.$data.isLoader=true;
			var t = this;
			var d = t.getDash();
			if (d.length===0){
				vue.$data.isLoader=false;
				vue.tstW('No dashborads defined')
			} else{
				t.getDash().map(o=>{
					if(o.sensor_id){
						var dt= Date.now();
						vue.getData({"path":"query/feedsByIndex","parent":"device_id","parentVal":o.device_id,"index":"sensor_id","value":o.sensor_id,
						"from":dt-o.interval*1000,"to":dt}
						, function(err,res){
							vue.$data.isLoader=false;
							if(res&& res.length>0){
								t.$data.dashConfig=o;
								t.showChart(res);
							} else if (res){
								vue.tstW('No data found'+o.name);
							} else {
								c(err);
								vue.tstW('No data found')
							};
						});
					};
				});
			};
		}, getDash : function () {
		   return vue.gs('dash') ? JSON.parse(vue.gs('dash')) : [];
		}, showChart : function(msg){
			var options = {
				responsive: true,
				legend: {
					labels: {
						fontColor: "black",
						fontSize: 16
					}
				}, scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}],
					xAxes: [{
						ticks: {
							fontColor: "black",
							fontSize: 16,
							beginAtZero: true
						}
					}]
				}
			}
			vue.$data.isLoader=true;
			var t = this;
			var ddd = t.$data.dashConfig;
			c(ddd)
			var labels=[];
			var data=[];
			var dataColor=[];
			var type=ddd.chart ? ddd.chart : t.$data.selectChart[0];
			if (['pie','doughnut','map'].indexOf(type) ===-1){
				options.scales.xAxes[0].type='time';
				options.scales.xAxes[0].time={'displayFormats': {'minute': 'hh:mm'}};
				msg.map(o => {
					d = new Date(o.timeS); // The 0
					labels.push(moment(d))
					data.push(o.data);
						if(ddd.min !=="" && o.data<ddd.min){
							dataColor.push(ddd.minColor);
						} else if(ddd.max !=="" && o.data>ddd.max){
							dataColor.push(ddd.maxColor);
						} else{
							dataColor.push(ddd.color||'black');
						}
					})
			} else{
				if(ddd.min !==""){
					dataColor.push(ddd.minColor)
					var m = msg.filter(({data}) => data < ddd.min).length;
					data.push(m);
					labels.push('min-'+m||0);
				}
				if(ddd.max !==""){
					dataColor.push(ddd.maxColor)
					var m = msg.filter(({data}) => data > ddd.max).length;
					data.push(m);
					labels.push('max-'+m||0)
				}
				var m = msg.length - (data[0]||0)-(data[1]||0);
				dataColor.push(ddd.color);
				data.push(m);
				labels.push('ok-'+m||0);
				labels.push('total-'+msg.length);
			};
			c(options)
			t.$data.charts[ddd.name]= new Chart(vue.el(ddd.name).getContext('2d'), {
				type: type,
				data: {
					labels: labels,
					datasets: [{
						type: type,
						fill:false,
						label: ddd.group_name+'-'+ddd.device_id+'-'+ddd.sensor_id,
						data: data,
						pointBackgroundColor : dataColor,
						backgroundColor : dataColor,
						fillColors : dataColor,
						borderWidth: 1
					}]
				}, options: options
			});
		vue.$data.isLoader=false;
		}
	}, template :
	`<div class="tile is-ancestor">
		<div class="tile is-4 is-vertical">
			<div v-if="i%3===0" class="tile is-border" v-for="(o,i) in selectDash">
				<canvas v-bind:id="o.name"></canvas>
			</div>
		</div>
		<div class="tile is-4 is-vertical">
			<div v-if="i%3===1" class="tile is-border" v-for="(o,i) in selectDash">
				<canvas v-bind:id="o.name"></canvas>
			</div>
		</div>
		<div class="tile is-4 is-vertical">
			<div v-if="i%3===2" class="tile is-border" v-for="(o,i) in selectDash">
				<canvas v-bind:id="o.name"></canvas>
			</div>
		</div>
	</div>`
}
var exit = {
    created (){
		vue.loader(1);
	c('created exit');
		localStorage.removeItem('user');
		vue.nav('/');
    }, mounted () {
		c('mounted exit')
		vue.loader(0);
    }
};
var hist = {
	data () {
		return {
			defaultSortDirection: 'desc',
			activeTab:0,
			group : '',
			groupColumns: [{
				field: 'group_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'group_name',
				label: 'Name',
				width: '40',
				sortable : true,
				centered : true
			}],
			selectGroups : '',
			device : '',
			deviceColumns: [{
				field: 'device_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'device_name',
				label: 'Name',
				width: '40',
				centered: true,
				sortable : true,
			}],
			sensor : '',
			sensorColumns: [{
				field: 'sensor_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'sensor_name',
				label: 'Name',
				width: '40',
				centered: true,
				sortable : true,
			}],
			selectSensors : '',
		}
    }, created () {
		c('created confGroups');
		vue.$data.isLoader=true;
    }, mounted () {
		this.$nextTick(function () {
			c('mounted confGroups');			
		});  
		this.getGroups();
    }, methods : {
		getGroups : function(){
			t = this;
			vue.$data.isLoader=true;
			vue.getData({"path":"query/groups"}, function(err,res){
				if(res){
					vue.ls(['groups',JSON.stringify(res)]);
					t.$data.selectGroups = res;
				} else {
					c(err);
				}
				vue.$data.isLoader=false;
			});
		}
    }, template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="">
			<b-tab-item label="Devices" icon="cellphone-link">
			<b-table
				:data="group.group_devices"
				:columns="deviceColumns"
				focusable class="column"
				:selected.sync="device">
			</b-table>
			</b-tab-item>
			<b-tab-item label="Sensors" icon="heart-pulse">
				<b-table
				:data="device.device_sensors"
				:columns="sensorColumns"
				focusable class="column"
				:selected.sync="sensor"
			></b-table>
			</b-tab-item>
		</b-tabs>
		</div>`
};
var login  = { 
	path: '/', 
	name:login,
	component: {
		data : function() {
			return {
				username: this.getUser().username,
				password: this.getUser().username,
				token: this.getUser().token,
				err: ''
			}
		}, created : function (){
			c('created login');
			if (this.$data.token){vue.nav('/main')}
		}, mounted : function (){ 
			c('mounted login');
		}, updated : function (){
		}, methods : {
			getUser:function() {
				var u = vue.gs('user');
				return u!==null && u ? JSON.parse(u) : {"username": "","password":"","token":""};
			},
			login : function () {
				d = this.$data;
				if (d.username && d.password){
					vue.getData({"path":"login","username": this.$data.username,"password":this.$data.password}, function(err,res){
					if(res.user){
						vue.ls(['user',JSON.stringify(res.user)]);
						vue.nav('/main');
					} else {
						vue.tstW('Wrong details')
					}
					});
				}
				else {
					vue.tstW('Details missing')
				}
			}
		}, template:
			`<div >
			
			<section class="section">      
				<form v-if="!token" id="formLogin" class="container column is-4 is-offset-4">
				    <b-field label="username">
            <b-input v-model="username" icon="account"></b-input>
        </b-field>
		<b-field label="password" >
            <b-input type="password" icon="lock-question"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
		<div style="text-align: center" > 
			<button class="button is-dark is-medium " @click.prevent="login">Login</button>
		</div>
		<div style="text-align: center"><img src="./img/logo.png"></img></div>
		</section>
			
	</div>` 
	}
};
var user = {
    data () {
		return {
			photo : null,
			user: vue.isJson(vue.gs('user'),{'user':''}),
			password: null,
			passwordNew: null,
			passwordNewR: null,
			email: null,
			err: null
		}
    }, created (){
		vue.loader(1);    
		c('created user')
    }, mounted () {
		c('mounted user')
		vue.loader(0);
    }, template :`<div><form id="form" class="appLogin">
	    <div>
			<label for="username">Username</label>
			<span v-html="icon('person')"></span>
	    </div>  
		<div id="username" name="username" >{{user.username}}</div>
		<div>
			<label for="mail">email</label>
			<span v-html="icon('mail')"></span>
	    </div>  
			<input type="email" id="mail" name="mail" v-model="user.email"></input>
	    <div>Password Change</div>
	    <div>
			<label for="password">Old Password</label>
			<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="password" id="password" name="password" v-validate="'required'"  />
	    <div>
		<label for="password">New Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNew" id="passwordNew" name="password" v-validate="'required'"  />
	    <div>
		<label for="passwordNewR">Repeat Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNewR" id="passwordNewR" name="password" v-validate="'required'"  />
	    <div v-if="password!=='' && password!==null && passwordNew!=='' && passwordNew!==null && passwordNew===passwordNewR" >
		<button @click.prevent="login" class="btn btn-danger">Change</button>
	    </div>
	    <div v-if="err" class="danger" id ="err">{{err}}</div>
	</form></div>`
};
const userAdmin = {
		data (){
			return {
				pass:'',
				activeTab: 0,
				tabColumns: [
				{
					field: 'name',
					label: 'name',
					width: '40',
					sortable : true,
					centered: true
				},{
					field: 'group_name',
					label: 'group',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'device_name',
					label: 'device',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'sensor_id',
					label: 'sensor',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'interval',
					label: 'interval',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'chart',
					label: 'chart',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'min',
					label: 'min',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'max',
					label: 'max',
					width: '40',
					sortable : true,
					centered : true
				}
			]
		}
		}, props: ['name','email','username','active','admin','graphs']
		, template: `
            <form action="">
				<section>
				<b-tabs type="is-boxed" v-model="activeTab">
					<b-tab-item label="General" icon="account">
						<b-field label="Name">
							<b-input
								:value="name"
								placeholder="name"
								required>
							</b-input>
						</b-field>
						<b-field label="Email">
							<b-input
								type="email"
								:value="email"
								placeholder="Your email"
								required
								icon="email">
							</b-input>
						</b-field>
					</b-tab-item>
					<b-tab-item label="Permissions" icon="account-network">
						<b-field label="Admin">
							<b-switch 
							v-model="admin"
							true-value="true"
							false-value="false"
							type="is-danger">
							</b-switch>
						</b-field>
						<b-field label="Active">
							<b-switch 
							v-model="active"
							true-value="true"
							false-value="false"
							type="is-danger">
							</b-switch>
						</b-field>
					</b-tab-item>
					<b-tab-item label="Security" icon="lock-question">
					<b-field label="Password">
						<b-input
						type="password"
						:value="pass"
						password-reveal
						placeholder="password"
						icon="lock-question">
						</b-input>
					</b-field>
					</b-tab-item>
				<b-tab-item label="Dashboards" icon="speedometer">
					<b-table bordered
					narrowed
					:data="graphs"
					:columns="tabColumns"
					class="column"
					>
				</b-table>
					</b-tab-item>
				</b-tabs>
				</section>
				<footer class="modal-card-foot">
				<p class="control">
					<button class="button is-dark is-medium" @click.prevent="vue.tstW('Save not implemented')">
					<b-icon icon="content-save"></b-icon></button></button></p>
				<p class="control">
					<button class="button is-danger is-medium" @click.prevent="$parent.close()">
					<b-icon icon="cancel"></b-icon></button></button></p>
				</footer>
			</div>
			</form>
			</section>
    <form>`
}
const userModal = {
		data (){
			return {
				pass:'',
				passN:'',
				keep:'yes',
				activeTab: 0
			}
		}, props: ['email','username']
		, template: `
            <form action="">
                <div class="modal-card" style="width: auto;min-height:500;min-width:400;">
                    <header class="modal-card-head">
                        <p class="modal-card-title"><b-icon icon="account"></b-icon>{{username}}</p>
                    </header>
                    <section class="modal-card-body">
						<b-tabs type="is-boxed" v-model="activeTab">
            <b-tab-item label="General" icon="account">
			  <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required
								icon="email">
                            </b-input>
                        </b-field>
            </b-tab-item>
            <b-tab-item label="Security" icon="lock-question">
                <b-field label="Password">
                            <b-input
                                type="password"
                                :value="pass"
                                password-reveal
                                placeholder="Current password"
								icon="lock-question"
                                >
                            </b-input>
                        </b-field>
						<b-field label="New Password">
                            <b-input
                                type="password"
                                :value="passN"
                                password-reveal
                                placeholder="New password" 
								icon="lock-question"
                                >
                            </b-input>
                        </b-field>
						<b-field label="Keep Logged In">
							<b-switch v-model="keep"
								type="is-danger"
								true-value="yes"
								false-value="no">
								{{keep}}
							</b-switch>
						</b-field>
            </b-tab-item>
        </b-tabs>
                        
                    </section>
                    <footer class="modal-card-foot">
					<p class="control">
					<button class="button is-dark is-medium" @click.prevent="vue.tstW('Save not implemented')">
					<b-icon icon="content-save"></b-icon></button></button></p>
                        <p class="control">
				<button class="button is-danger is-medium" @click.prevent="$parent.close()">
				<b-icon icon="cancel"></b-icon></button></button></p>
				</footer>
                </div>
            </form>`
}
var pages = [
	{ path: 'dash',
    name: 'Dashboard',
	component: dash ,
    icon : 'speedometer'
    },
    { path: 'confCharts',
    name: 'Charts',
    component: confCharts,
     icon : 'finance'
    },
    { path: 'history',
    name: 'History',
    component: hist,
     icon : 'view-list'
    },	
    { path: 'confUsers',
    name: 'Users',
    component: confUsers,
    icon : 'account-multiple'
    },
    { path: 'confGroups',
    name: 'Groups',
    component: confGroups,
    icon : 'group'
    },
    { path: 'conf',
    name: 'Configuration',
    component: conf,
    icon : 'wrench'
    }
];
var main = { 
	path : '/main', 
	name : main,
	children: pages,
	component: {
		data (){
			return {
				navIsActive: false,
				isUserModal:false,
				user: vue.isJson(vue.gs('user'),{'user':''})
			}
		}, created : function(){
			c('created main')
			addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
				vue.nav('/main/confCharts')
			});
		}, mounted () {
			Vue.component('userModal', userModal);
			// vue.$components.push(userModal);
		}, methods : {
			changePage (e) {
				vue.nav('/main/'+e);
				vue.$data.isLoader=true;
			},toggleMenu: function () {
				this.navIsActive = !this.navIsActive
			}
		}, template :
		`<div>
		<b-loading :is-full-page="true" :active.sync="vue.$data.isLoader" :can-cancel="false"></b-loading>
		<nav class="navbar is-dark is-fixed-top " role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a role="button" class="navbar-burger burger" @click="toggleMenu" 
			style="color:white" :class="{'is-active': navIsActive}" data-target="mainNav"
			aria-label="menu" aria-expanded="false">
			  <span aria-hidden="true"></span>
			  <span aria-hidden="true"></span>
			  <span aria-hidden="true"></span>
			</a>
		</div>
		<div id="mainNav" class="navbar-menu is-Danger" :class="{'is-active': navIsActive}">
			<div class="navbar-start">
				<div class="nav-item" v-for="rec in pages">
					<button class="button is-dark is-fullwidth" @click.prevent="vue.nav('/main/'+rec.path)">
					<b-icon :icon="rec.icon"></b-icon><span>{{rec.name}}</span></button>
				</div>
			</div>
			<div class="navbar-end">
				<button class="nav-item button is-dark is-fullwidth" @click="isUserModal = true"><b-icon icon="account"></b-icon></button>
				<button class="nav-item button is-dark is-fullwidth" @click="vue.logout"><b-icon icon="logout"></b-icon></button>
			</div>
		</div>
		</nav>
		<router-view></router-view>
		<b-modal :active.sync="isUserModal" has-modal-card >
            <userModal v-bind="user"></userModal>
        </b-modal>
	</div>`
	}
}