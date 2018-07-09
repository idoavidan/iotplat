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
    }, template : `<div><router-view></router-view><div>`
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
	    activeTab:1,
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
		navBtns :{
			'dash':{'msg':'Select existing Dashboard','buttons':[{'button':'del','status':false},{'button':'right','status':true}]},
			'device':{'msg':'Choose Group, Device and Sensor to monitor','buttons':[{'button':'left','status':true},{'button':'right','status':false}]},
			'chart':{'msg':'Select Chart properties','buttons':[{'button':'left','status':true},{'button':'right','status':true}]},
			'alert':{'msg':'Configure Alerts','buttons':[{'button':'left','status':true},{'button':'right','status':true}]},
			'view':{'msg':'Save or go to previous steps','buttons':[{'button':'left','status':true},{'button':'save','status':true}]}
		},
	    dashColumns: [{
			field: 'name',
			label: 'Dashboard',
			width: '40',
			sortable:true,
			centered : true
	    }],		
	    group : '',
	    groupColumns: [{
		field: 'group_name',
		label: 'Group',
		width: '40',
		sortable:true,
		centered : true
	    }],
	    selectGroups : '',
	    devices : '',
	    deviceColumns: [{
		field: 'device_name',
		label: 'Device',
		width: '40',
		sortable:true,
		centered: true,
	    }],
	    sensors : '',
	    sensorColumns: [{
		field: 'sensor_id',
		label: 'Sensor',
		width: '40',
		sortable:true,
		centered: true,
	    }],
	    selectSensors : '',
	    dashConfig : {},
	    dashConfigHist : [],
	    selectDash : [],
	    selectGroups : this.getGroups(),
	    isMounted:false
	}
    }, computed: {
    }, created () {
		c('created confCharts');
		vue.$data.isLoader=true;
		addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
	});
    }, mounted () {
		Vue.component('navlevel', navLevel);
	var t=this;
	t.$nextTick(function () {
	    t.$data.dashConfig = t.getDefault();
	    t.$data.isMounted=true;
	    t.$data.selectDash=this.getDash();
	    c('mounted confCharts');
	    vue.$data.isLoader=false;
	});  
    }, methods : {
	reset(m){
		var d=this.$data;
	},
	required (){
		var d = this.$data
		var f=d.chartFields.filter(o => o.required === "true" )
		if(d.group.group_name && d.devices.device_name && d.sensors.sensor_id){
			t.navBtns.device.buttons.map(o=>o.status=true)
		} else{
			t.navBtns.device.buttons.find(o=>o.button==='right').status=false;
		}
		var e=f.map(o=> 
			d.dashConfig[o.field] !==undefined && ['',null,undefined].indexOf(d.dashConfig[o.field])===-1
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
		var t = this;
		vue.$data.isLoader=true;
		var datasets=[];
		var d = this.$data;
		var ddd = d.dashConfig;
		// c(ddd)
		var dataset={label:ddd.group_name+'-'+ddd.device_id+'-'+ddd.sensor_id,
		borderWidth:1};	
		// c(dataset);
		var sensor = d.devices.device_sensors;
		sensor.map( o=> {
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
	}, changeTab : function (){
		tab = this.$data.activeTab;
		if(d.activeTab===4){
			d.dashConfig.group_name=d.group.group_name;
			d.dashConfig.device_id=d.devices.device_id;
			d.dashConfig.sensor_id=d.sensors.sensor_id;
			this.changeChart();
		}
	},compEvent : function(data){
			if(data==='left'){
				this.$data.activeTab--;
			} else if(data=='right'){
				this.$data.activeTab++;
			} else if(data=='save'){
				this.saveDash();
			} else if(data=='del'){
				vue.tstS('del')
			}
		}
	},
	watch : {
		dashConfig(){
			var t = this ;
			if(t.dashConfig.name!==""){
				t.navBtns.dash.buttons.map(o=>o.status=true)
			} else{
				t.navBtns.dash.buttons.find(o=>o.button==='del').status=false;
			}
				t.group=t.selectGroups.find(o=>o.group_name===t.dashConfig.group_name)||'';
				c(t.group)
			if (t.group!==undefined && t.group.group_devices!==undefined){
				t.devices=t.group.group_devices.find(o=>o.device_name===t.dashConfig.device_id)||'';
			}
			if (t.devices!=''){
				t.sensors=t.devices.device_sensors.find(o=>o.sensor_id===t.dashConfig.sensor_id)||'';
			}
		}, group(){
			c('group')
			var d=this.$data;
			d.devices='';
		}, devices(){
			c('dev')
			var d=this.$data;
			d.sensors=''
		}
	},
	template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="changeTab()" v-if="isMounted">
		<b-tab-item label="speedometer" class="is-dark">
			<template slot="header">
				<b-icon icon="speedometer"></b-icon>
				<span> Dashboards <b-tag rounded> {{selectDash.length - 1}} </b-tag> </span>
			</template>
			<navlevel v-bind:nav="navBtns.dash" v-on:compEvent="compEvent($event)"></navlevel>
				<b-table bordered narrowed class="column is-4"
				 :data="selectDash"
				 :columns="dashColumns"
				 focusable
				 :selected.sync="dashConfig"
				 paginated
				 :per-page="10"
				 ></b-table>
		</b-tab-item>
		<b-tab-item label="Devices" icon="group" :disabled="!required()" > 
			<navlevel v-bind:nav="navBtns.device" v-on:compEvent="compEvent($event)"></navlevel>
			<section class="columns">
			<b-table bordered narrowed class="column is-4"
				 :data="selectGroups"
				 :columns="groupColumns"
				 focusable
				 :selected.sync="group"
				 paginated
				 :per-page="10"
				 @select="reset('g')"
				 ></b-table>
			<b-table bordered narrowed class="column is-4"
				 :data="group.group_devices"
				 :columns="deviceColumns"
				 focusable
				 :selected.sync="devices"
				 paginated
				 :per-page="10"
				 @select="reset('d')"
				 >
			</b-table>
			<b-table bordered narrowed class="column is-4"
				 :data="devices.device_sensors"
				 :columns="sensorColumns"
				 focusable
				 :selected.sync="sensors"
				 paginated
				 :per-page="10"
				 ></b-table>
		</section>
		</b-tab-item>
		<b-tab-item label="Chart" icon="finance" :disabled="!required()">
		<navlevel v-bind:nav="navBtns.chart" v-on:compEvent="compEvent($event)"></navlevel>
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
					{{moment.duration(o, "seconds").humanize()}}
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
		<b-tab-item label="Alerts" icon="alert"  :disabled="!required()">
		<navlevel v-bind:nav="navBtns.alert" v-on:compEvent="compEvent($event)"></navlevel>
		</b-tab-item>
		<b-tab-item label="View" icon="eye" :disabled="!required()">
		<navlevel v-bind:nav="navBtns.view" v-on:compEvent="compEvent($event)"></navlevel>
		<canvas id="mainChart"></canvas>
		</b-tab-item>
	</b-tabs>	
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
			user : {'username':'','name':'','surname':'','email':'','role':[],'graphs':[],'active':true},
			userDef : {'username':'','name':'','surname':'','email':'','role':[],'graphs':[],'active':true},
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
		}, compEvent : function(data){
			vue.tstW(data);
			if(data==='left'){
				this.$data.activeTab--;
			} else if(data=='right'){
				this.$data.activeTab++;
			} else if(data=='save'){
				this.saveDash();
			} else if(data=='del'){
				vue.tstS('del')
			}
		}
	}, template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="if(activeTab===0){user=null}">
			<b-tab-item label="New" icon="account-plus">
				<userAdmin v-bind:user="userDef" v-on:compEvent="compEvent($event)"></userAdmin>
			</b-tab-item>
			<b-tab-item label="Users" icon="account-multiple">
				<b-table bordered
					narrowed
					:data="selectUser"
					:columns="tabColumns"
					focusable class="column"
					:selected.sync="user"
					paginated
					:per-page="10">
				</b-table>
			</b-tab-item>
			<b-tab-item label="Edit" icon="account-edit" :disabled="user===null">
				<userAdmin v-bind:user="user"></userAdmin>
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
			selectDevices : '',
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
			this.getGroups();
		});  
    }, methods : {
		getGroups : function(){
			t = this;
			vue.$data.isLoader=true;
			vue.getData({"path":"query/groups"}, function(err,res){
				if(res){
					vue.ls(['groups',JSON.stringify(res)]);
					var x = []
					x= res.map(o=>x.concat(o.group_devices))
					c(x)
					t.$data.selectDevices = x;
					c(t.$data.selectDevices)
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
				:data="selectDevices"
				:columns="deviceColumns"
				focusable 
				class="column"
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
	props: true,
	component: {
		data : function() {
			return {
				username:'',
				password: '',
				keep:'yes',
				err: ''
			}
		}, props:['user']
		, created : function (){
			c('created login');
			if (this.$props.user.token){
				vue.getData({"path":"reconnect"}, function(err,res){
					if (res){
						vue.nav('/main');
					};
				});
			};
		}, mounted : function (){ 
			c('mounted login');
		}, updated : function (){
		}, methods : {
			login : function () {
				d = this.$data;
				if (d.username && d.password){
					vue.getData({"path":"login","username": this.$data.username,"password":this.$data.password}, function(err,res){
					if(res.user){
						if (d.keep ==='yes'){
							vue.ls(['user',JSON.stringify(res.user)]);
						}else{
							localStorage.removeItem('user');
						}
						vue.$data.user=res.user;
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
				<form v-if="!user.token" id="formLogin" class="">
				<section class="columns">
				<div class="container is-offset-4 column is-4">
				    <b-field label="username" position="is-center">
						<b-input v-model="username" icon="account"></b-input>
					</b-field>
					<b-field label="password" position="is-center">
						<b-input type="password" icon="lock-question" v-model="password" password-reveal></b-input>
					</b-field>
					<b-field label="Keep Logged In" position="is-center">							
						<b-switch v-model="keep" type="is-danger" true-value="yes" false-value="no"></b-switch>
						<p class="control"><button class="button is-dark is-medium " @click.prevent="login">Login</button></p>
					</b-field>
					<p class="image is-offset-4 column is-4">
					<img src="./img/logo.png" ></img>
					</p>
				</div>
	
				</section>
				</form>
	</div>` 
	}
};
const navLevel = {
	data (){
		return {
			rrrrrr:''
		}
	}, props: ['nav']
	, mounted(){
		// c(this.$props)
	}, methods : {
		showBtn(btn){
			return this.$props.nav.buttons.findIndex(o=>o.button===btn)!==-1
		}, disBtn(btn){
			var x = this.$props.nav.buttons.find(o=>o.button===btn);
			return x && x.status===false;
		}, compEvent(d){
			this.$emit('compEvent',d);
		}
	},template:
		`<nav class="level" >
			<div class="level-left">
				<div class="level-item" v-if="showBtn('left')">
					<button class="button is-link is-medium" @click="compEvent('left')" :disabled="disBtn('left')">
					<b-icon icon="arrow-left"></b-icon> <p>Back</p></button>
				</div>
				<div class="level-item" v-if="showBtn('save')">
					<button class="button is-dark is-medium" @click.prevent="compEvent('save')" :disabled="disBtn('save')">
						<b-icon icon="content-save"></b-icon> <p>Save</p></button>
					</div>
				<div class="level-item" v-if="showBtn('del')">
					<button class="button is-danger is-medium" hidden @click="compEvent('del')" :disabled="disBtn('del')">
					<b-icon icon="delete"></b-icon></button>
				</div>
			</div>
			{{nav.msg}}
			<div class="level-right">
				<div class="level-item" v-if="showBtn('right')">
					<button class="button is-link is-medium" @click="compEvent('right')" :disabled="disBtn('right')">
					Next<p></p> <b-icon icon="arrow-right"></b-icon></button>    
				</div>
			</div>
		</div>
	</nav>`
}
const userAdmin = {
		data (){
			return {
				pass:'',
				activeTab: 0,
				roles:['','device','user','admin'],
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
		}, props: ['user']
		, mounted () {
			c(this.$props)
		}, methods :{
			compEvent(d){
				this.$emit('compEvent',d);
			}
		} , template: `
            <form action="">
				<section>
				<nav class="level" >
					<div class="level-left">
						<div class="level-item">
							<button class="button is-dark is-medium" @click.prevent="compEvent('save')">
								<b-icon icon="content-save"></b-icon></button></button>
						</div>
						<div class="level-item">
							<button class="button is-danger is-medium" @click.prevent="$parent.close()">
								<b-icon icon="cancel"></b-icon></button></button>
						</div>
					</div>
					<div class="level-right"></div>
				</nav>
				<b-tabs type="is-boxed" v-model="activeTab">
					<b-tab-item label="General" icon="account">
						<b-field label="Name">
							<b-input
								:value="user.name"
								placeholder="name"
								required>
							</b-input>
						</b-field>
						<b-field label="Name">
							<b-input
								:value="user.surname"
								placeholder="surname"
								required>
							</b-input>
						</b-field>
						<b-field label="Email">
							<b-input
								type="email"
								:value="user.email"
								placeholder="Your email"
								required
								icon="email">
							</b-input>
						</b-field>
					</b-tab-item>
					<b-tab-item label="Permissions" icon="account-network">
						<b-field label="Role" class="">
							<b-select v-model="user.role">
								<option v-for="o in roles" :value="o">
								{{o}}
								</option>
							</b-select>
						</b-field>
						<b-field label="Active">
							<b-switch 
							:value="user.active"
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
					:data="user.graphs"
					:columns="tabColumns"
					class="column"
					>
				</b-table>
					</b-tab-item>
				</b-tabs>
				</section>
				<footer class="modal-card-foot"></footer>
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
		}, props: ['user']
		, template: `
            <form action="">
                <div class="modal-card" style="width: auto;min-height:500;min-width:400;">
                    <header class="modal-card-head">
                        <p class="modal-card-title"><b-icon icon="account"></b-icon>{{user.username}}</p>
                    </header>
                    <section class="modal-card-body">
						<b-tabs type="is-boxed" v-model="activeTab">
            <b-tab-item label="General" icon="account">
			  <b-field label="Email">
                            <b-input
                                type="email"
                                :value="user.email"
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
    name: 'Home',
	component: dash ,
    icon : 'home',
	role:''
    },
    { path: 'history',
    name: 'History',
    component: hist,
     icon : 'view-list',
	 role:''
    },
    { path: 'conf',
    name: 'Configuration',
    component: conf,
    icon : 'wrench',
	role:'',
	children:[
		{ 	path: 'confCharts',
			name: 'Dashboards',
			component: confCharts,
			icon : 'speedometer',
			role:''
		}, { path: 'confUsers',
			name: 'Users',
			component: confUsers,
			icon : 'account-multiple',
			role:'admin'
		},{ path: 'confGroups',
			name: 'Devices',
			component: confGroups,
			role:'admin',
			icon : 'group'
		}
	]}
];
var main = { 
	path : '/main', 
	name : main,
	children: pages,
	props:true,
	component: {
		data (){
			return {
				navIsActive: false,
				isUserModal:false,
			}
		},props:['user'], created : function(){
			c('created main')
			addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
				vue.nav('/main/dash')
			});
		}, mounted () {
			Vue.component('userModal', userModal);
			// vue.$components.push(userModal);
		}, methods : {
			changePage (e) {
				vue.nav('/main/'+e);
				vue.$data.isLoader=true;
			}, toggleMenu: function () {
				this.navIsActive = !this.navIsActive
			},
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
				<div class="nav-item" v-for="rec in pages" v-if="rec.role==='' || rec.role===user.role">
					<button v-if="!rec.children" class="button is-dark is-fullwidth" @click.prevent="vue.nav('/main/'+rec.path)">
						<b-icon :icon="rec.icon"></b-icon><span>{{rec.name}}</span>
					</button>
					<b-dropdown v-else class="is-dark is-fullwidth">
						<div class="button is-dark" slot="trigger">
							<b-icon :icon="rec.icon"></b-icon>
							<span>{{rec.name}}</span>
							<b-icon icon="menu-down"></b-icon>
						</div>
						<b-dropdown-item class="button is-medium is-dark" v-for="c in rec.children" @click="vue.nav('/main/'+rec.path+'/'+c.path)"
						v-if="c.role==='' || c.role===user.role">
						<template>
							<b-icon :icon="c.icon"></b-icon><span>{{c.name}}</span>
						</template>
						</b-dropdown-item>
					</b-dropdown>
				</div>
			</div>
			<div class="navbar-end">
			{{user.username}}
				<button class="nav-item button is-dark is-fullwidth" @click="isUserModal = true"><b-icon icon="account"></b-icon></button>
				<button class="nav-item button is-dark is-fullwidth" @click="vue.logout"><b-icon icon="logout"></b-icon></button>
			</div>
		</div>
		</nav>
		<router-view></router-view>
		<b-modal :active.sync="isUserModal" has-modal-card >
            <userModal :user="user"></userModal>
        </b-modal>
	</div>`
	}
}