var c = console.log.bind(console);
var vue, 
    v,
    router;
function loader(data){
    var l = el('loader').style;
    if (data===1){
	l.display=""
    } else {
	l.display="none";
    };
};
//var myWorker = new Worker('./js/app2.js');
var appData={"path":"query",
    "selectChart":["line","bar"]};
function el(data){
    return document.getElementById(data);
};
function ls(data){
    try {
	localStorage.setItem(data[0],data[1]);
	return true;
    } catch(e){
	return false;
    }
};
function gs(data){
    return localStorage.getItem(data);
};

function addScript(data,callback) {
    var s = document.createElement('script');
    if(gs(data.name)){
	s.setAttribute('src', gs(data.name));
    } else{
	getFile({"path":data.path,"type":"application/javascript"}, function(res) {
	    s.setAttribute('src', res);
	    ls([data.name,res]);
	});
    };
    document.body.appendChild(s);
    s.onload = function (){
		callback();
    };
};
//request data 
function getData(data,callback){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", appData.path+'/'+data.path, true);
    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function(e) {//Call a function when the state changes.
	if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0) {
	    callback(null,JSON.parse(xhr.response));
	} else if (xhr.status !== 200){
	    alert('error, please check console');
	    c(xhr,null);
	    callback(xhr,null);
	} else {
	    alert('error, please check console');
	    c(xhr,null)
	    callback(xhr,null);
	};
    };  
    xhr.send(JSON.stringify(data)); 
};
function getFile(data,callback){
    var xhr = new XMLHttpRequest(),
	blob,
	fileReader = new FileReader();
    xhr.open("GET", data.path, true);
    //Send the proper header information along with the request
    // xhr.responseType = "application/javascript";
    xhr.onload = function(e) {//Call a function when the state changes.
	if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0) {
	    blob = new Blob([xhr.response],{type:data.type});
	    fileReader.onload = function(evt){
		callback(evt.target.result);
	    };
	    fileReader.readAsDataURL(blob);
	} else if (xhr.status !== 200){
	    alert('error, please check console');
	    c(xhr);
	} else {
	    alert('error, please check console');
	    c(xhr);
	};
    };
    xhr.send(JSON.stringify(data)); 
};

function start(){
    addScript({"path":"./js/vue.min.js","name":"vue.min.js"},function(){
	 addScript({"path":"./js/vue-router.js","name":"vue-router.js"},function(){
	     vueFunc()
	 });
    });
};

function changeSensor(data){
    if(data){
	getData({"path":"feedsByIndex","index":"sensor","value":data}
	, function(err,res){
	    if(res){
		ls([data,JSON.stringify(res)]);
		showChart(res);
	    } else
	    {
		alert('No data found')
	    }
	});
    } else if(!data){
//	showChart(JSON.parse(d));
    }
};
function changeChart(data){
    if(data){
	getData({"path":"feedsByIndex","index":"sensor","value":data}
	, function(res){
	    showChart(res);
	});
    };
};
start();
var mainChart;
function showChart(msg){
    var labels=[];
    var data=[];
    var dataColor=[]
    var type=el("selectChart").value ? el("selectChart").value :'line';
    msg.map(o => {
	d = new Date(o.time*1000); // The 0
	labels.push(String(d.getHours()).padStart(2,"0")+':'+String(d.getMinutes()).padStart(2,"0")+':'+String(d.getSeconds()).padStart(2,"0"));
	data.push(o.data);
	if(o.data<25 || o.data >35){
		dataColor.push("red");
	}
	else{
	    dataColor.push(el("selectColor").value);
	};
    });
	el("mainChart").innerHTML="";
	if (mainChart){mainChart.destroy()};
	var ctx = el("mainChart").getContext('2d');
	mainChart= new Chart(ctx, {
	type: type,
		data: {
		labels: labels,
		datasets: [{
			type: el('selectChart').value,
			fill:false,
			label: el("selectGroup").value+'-'+el("selectDevice").value+'-'+el("selectSensor").value,
			data: data,
			pointBackgroundColor: dataColor,
			backgroundColor: el("selectColor").value,
			borderWidth: 1
		}]
		},
		options: {
			responsive: true,
			legend: {
				labels: {
				fontColor: "black",
				fontSize: 18
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
			fontSize: 14,
			stepSize: 10,
			beginAtZero: true
		}
	}]
			}
		}
	});
		
};
var modal = 
    `<transition name="modal">
	<div class="modal-mask">
	  <div class="modal-wrapper">
	    <div class="modal-container">
	      <div class="modal-header">
		<slot name="header">
		  default header
		</slot>
	      </div>
	      <div class="modal-body">
		<slot name="body">
		  default body
		</slot>
	      </div>
	      <div class="modal-footer">
		<slot name="footer">
		  default footer
		  <button class="modal-default-button" @click="$emit('close')">
		    OK
		  </button>
		</slot>
	      </div>
	    </div>
	  </div>
	</div>
      </transition>`
;
var login = {
    data : function() {
	return {
	    username: null,
	    password: null,
	    token: null,
	    err: null
	}
    }, created : function (){c('created login');ls(['username','max']);router.push('/main') 
    }, mounted : function (){ c('mounted login');
    }, updated : function (){
	el('username').focus();
    }, methods : {
	login : function () {
	    router.push('/main');
	}
    },
    template:
	`<form id="form" class="appLogin">
	    <div>
		<label for="username">Username</label>
		<div v-html="icon('person')"></div>
	    </div>  
	    <input type="text"  v-model="username" id="username" name="username" class="input-text" v-validate="'required'"/>
	    <div>
		<label for="password">Password</label>
		<div v-html="icon('lock'"></div>
	    </div>
	    <input type="password" v-model="password" id="password" name="password" class="input-text" v-validate="'required'"  />
	    <div v-if="username!=='' && username!==null && password!=='' && password!==null" >
		<button @click.prevent="login" class="btn btn-danger">Login</button>
	    </div>
	    <div v-if="err" class="danger" id ="err">{{err}}</div>
	    <div style="text-align: center"><img src="./img/logo.png"></img></div>    
	</form>` 
};
var main = {
    data (){
	return {
	    isActive: true,
	    hasError: false
	}
    }, created : function(){
	c('created main')
	addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
//	   router.push('/main/'+pages[0].path);
	router.push('/main/'+'configCharts');
	});
    }, mounted : function () {
	c('mounted main')
    }, methods : {
	changePage : function (e) {
	    router.push('/main/'+e);
	}
    }, template :
	`<div><div id="loader" class="lds-dual-ring centered"></div>
	<modal v-if="vue.$data.showModal" @close="vue.$data.showModal = false">
	    <h3 id="modal" slot="header">{{vue.$data.showModal}}</h3>
	</modal>
	 <div name="bar"><div class="appMenu menubar" role="navigation"> <router-link v-for="rec in pages" :to="{ name: rec.name }"><span v-html="rec.logo"></span></a> </li></div></div>
	    <router-view></router-view>
	</div>`
}
var configCharts = {
     data () {
	return	{
	    interval : '',
	    selectInterval : [30,60,300,1800,3600,7200,14400,28800,86400,604800,2629746,31556952],
	    chart : '',
	    selectChart: ['','bar','line','map'],
	    dashConfig:{minColor:'#0000FF'},
	    selectDash:this.getDash(),
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
	    maxColor:'#ff0000',    
	}
    }, created () {
	c('created configCharts');
	loader(1);
	addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
	});
    }, mounted () {
	this.$nextTick(function () {
	    c('mounted configCharts');
	    loader(0);
	})    
    }, methods : {
	getGroups : function(){
	    t = this;
	    if (!gs('groups')){
		getData({"path":"groups"}, function(err,res){
		    ls(['groups',JSON.stringify(res)]);
		    t.selectGroups=res;
		});
	    } else{
		return JSON.parse(gs('groups'));
	    };
	}, getDash : function () {
	   return gs('dash') ? JSON.parse(gs('dash')) : [];
	}, dashLoad :function(){
	 return el('selectDash')===null || el('selectDash').value==='';
	}, saveDash : function () {
	    var data = this.$data;
	    if(!data.dashConfig.sensor){vue.showAlert('No sensors');return;} ;
	    data.dashConfig.name = data.dashConfig.name || (data.dashConfig.group+data.dashConfig.device+data.dashConfig.sensor);
	    var d = this.getDash();
	    var pos = d.findIndex(o => o.name === data.dashConfig.name);
	    if (pos!=-1){
		d[pos]=data.dashConfig;	
	    } else{
		d.push(data.dashConfig);
	    };
	    ls(['dash',JSON.stringify(d)]) ;
	    vue.showAlert('saved dashboard');
//	}, getGroup : function(){
//	    data  = this.$data;
//	    if (!gs('group_'+data.group)){
//		getData({"path":"group","group_id":data.group}, function(err,res){
//		    if (res){
//			ls(['group_'+data.group,JSON.stringify(res.group_devices)]);
//			data.selectDevices=res[res.group_devices];
//		    }
//		});
//	    } else {
//		data.selectDevices=JSON.parse(gs('group_'+data.group));
//	    };
s	}, getGroup : function(){
	    t  = this;
	    if (!gs('group_'+t.$data.dashConfig.group)){
		getData({"path":"group","group_id":t.$data.dashConfig.group}, function(err,res){
		    if (res){
			ls(['group_'+t.$data.dashConfig.group,JSON.stringify(res.group_devices)]);
			t.$data.selectDevices=res.group_devices;
		    }
		});
	    } else {
		t.$data.selectDevices = JSON.parse(gs('group_'+t.$data.dashConfig.group));
	    };
	}, changeDevice : function(){
	    this.$data.selectSensors=this.$data.selectDevices.filter(({device_id}) => device_id === this.$data.dashConfig.device)[0].device_sensors;
	}, changeInterval : function(){	    
	    if(this.$data.interval){
		var dt= Date.now();
		getData({"path":"feedsByIndex","index":"sensor","value":el("selectSensor").value,
		    "from":dt/1000-this.$data.interval,"to":dt/1000}
		, function(res){
		    showChart(res);
		});
	    };
	}
    }, template :
	`<div class="appMain">
	    <div class="mainMenu">
		<div><div><span v-html="icon('dashboard')"></span><label>dashboard</label></div><select id="selectDash" v-model="dashConfig" @change="getDash()"><option selected value></option><option v-for="i in selectDash" :value="i">{{i.name}}</option></select></div>	
		<div><div><span v-html="icon('text-size')"></span><label>name</label></div><input id="nameDash" type="text" v-model="dashConfig.name"></input></div>
		<div><div><span v-html="icon('arrow-down')"></span><label>save</label></div><button v-bind:disabled="!dashConfig.sensor" id="saveDash" @click.prevent="saveDash"><span v-html="icon('arrow-down')"></button></div>
		<div><div><span v-html="icon('package')"></span><label>groups</label></div>
		    <select v-if="dashLoad()" id="selectGroup" v-model="dashConfig.group" @change="getGroup()"><option selected value></option><option v-for="i in selectGroups" :value="i.group_id">{{i.group_id}}</option></select>
		    <input  v-else id="selectGroup" v-model="dashConfig.group" readonly></input>
		</div>
		<div><div><span v-html="icon('device-mobile')"></span><label>devices</label></div>
		    <select v-if="dashLoad()" id="selectDevice" v-model="dashConfig.device" @change="changeDevice()"><option selected value></option><option v-for="i in selectDevices" :value="i.device_id">{{i.device_id}}</option></select>
		    <input  v-else id="selectDevice" v-model="dashConfig.device" readonly></input>
		</div>
		<div><div><span v-html="icon('pulse')"></span><label>sensors</label></div>
		    <select v-if="dashLoad()" id="selectSensor" v-model="dashConfig.sensor" @change="changeSensor(el('selectSensor').value)"><option selected value></option><option v-for="i in selectSensors" :value="i.sensor_id">{{i.sensor_id}}</option></select>
		    <input  v-else id="selectSensor" v-model="dashConfig.sensor" readonly></input>
		</div>	
		<div><div><span v-html="icon('calendar')"></span><label>from</label></div><input id="fromSelect" type="date" placeholder="from"></input></div>
		<div><div><span v-html="icon('calendar')"></span><label>to</label></div><input id="toSelect" type="date" placeholder="to"></input></div>
		<div><div><span v-html="icon('clock')"></span><label>interval</label></div><select id="selectInterval" v-model="dashConfig.interval" @change="changeInterval()"><option v-for="i in selectInterval" :value="i">{{moment.duration(i,"seconds").humanize()}}</option></select></div>	
		<div><div><span v-html="icon('graph')"></span><label>chart</label></div><select id="selectChart" v-model="dashConfig.chart" @change="changeSensor(el('selectSensor').value)"><option v-for="i in selectChart" :value="i">{{i}}</option></select></div>
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
var configGroups = {
    created : function(){
	    loader(1);
	    c('created configGroups')
    }, mounted : function () {
	    c('mounted configGroups')
	    loader(0);
    }, template :
	`<div><div class="appMenu">
	<div><span v-html="icon('package')"></span><label>groups</label></div>
	<div><span v-html="icon('device-mobile')"></span><label>devices</label></div>
	<div><span v-html="icon('pulse')"></span><label>sensors</label></div>	
	<select id="selectGroup" onchange="changeGroup(this.value)"><option selected value></option></select>
        <select id="selectDevice" onchange="changeDevice(this.value)"><option selected value></option></select>
        <select id="selectSensor" onchange="changeSensor(this.value)"><option selected value></option></select>
	</div>`
};
var blank = {
    created : function(){
	loader(1);
	c('created blank')
    }, mounted : function () {
	c('mounted balnk')
	loader(0);
    }, template :`<div></div>`
};
var dash = {
    data () {
	return	{
	    interval : '',
	    selectInterval : [30,60,300,1800,3600,7200,14400,28800,86400,604800,2629746,31556952],
	    chart : '',
	    selectChart: ['line','bar','map'],
	    dash : '',
	    selectDash:this.getDash(),
	    charts:{},
	    group : '',
	    selectGroups : '',
	    device : '',
	    selectDevices : '',
	    sensor : '',
	    selectSensors : '',
	    color : '',
	    selectColors : ''
	}
    }, created : function(){
	loader(1);
	c('created dash');
	var t = this;
	addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
	    var d = t.getDash();
	    t.getDash().map(o=>{
		if(o.sensor){
		    getData({"path":"feedsByIndex","index":"sensor","value":o.sensor}
		    , function(err,res){
			if(res){
			    t.$data.dash=o;
			    t.showChart(res);
			} else {
			    c(err);
			    alert('No data found')
			};
		    });
		};
	    });
	    loader(0);
	});
    }, mounted : function () {
	c('mounted dash')
    }, methods : {
	getDash : function () {
	   return gs('dash') ? JSON.parse(gs('dash')) : [];
	}, showChart : function(msg){
	    var ddd = this.$data;
	    c(ddd.dash)
	    var labels=[];
	    var data=[];
	    var dataColor=[];
	    var type=ddd.dash.chart ? ddd.dash.chart : ddd.selectChart[0];
	    msg.map(o=>{
		d = new Date(o.time*1000); // The 0
		labels.push(String(d.getHours()).padStart(2,"0")+':'+String(d.getMinutes()).padStart(2,"0")+':'+String(d.getSeconds()).padStart(2,"0"));
		data.push(o.data);
		if(o.data<ddd.dash.min){
		    dataColor.push(ddd.dash.minColor);
		} else if(o.data>ddd.dash.max){
		    dataColor.push(ddd.dash.maxColor);
		} else{
		   dataColor.push(ddd.dash.color||'green');
		};
	    });
//	    el("mainChart").innerHTML="";
//	    if (mainChart){mainChart.destroy()};
//	    var ctx = el(name).getContext('2d');
	    ddd.charts[ddd.dash.name]= new Chart( el(ddd.dash.name).getContext('2d'), {
		type: type,
		data: {
		    labels: labels,
		    datasets: [{
			    type: type,
			    fill:false,
			    label: ddd.dash.group+'-'+ddd.dash.device+'-'+ddd.dash.sensor,
			    data: data,
			    pointBackgroundColor: dataColor,
			    backgroundColor: ddd.dash.color,
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
				stepSize: 10,
				beginAtZero: true
			    }
			}]
		    }
		}
	    });
	}
    }, template :
	`<div class="mainDash">
	    <canvas v-if="i.sensor" v-for="i in selectDash" v-bind:id="i.name"></canvas>
	</div>`
};
var configUsers = {
    created : function(){
	    loader(1);
	    c('created configUsers')
    }, mounted : function () {
	    c('mounted configUsers')
	    loader(0);
    }, template :`<div>Users</div>`
};
var conf = {
    created : function(){
	loader(1);
	c('created conf')
    }, mounted : function () {
	    c('mounted conf')
	    loader(0);
    }, template :`<div>Configuration</div>`
};
var user = {
    data : function() {
	return {
	    photo : null,
	    username: gs('username'),
	    password: null,
	    passwordNew: null,
	    passwordNewR: null,
	    email: null,
	    err: null
	}
    },
    created : function(){
	loader(1);    
	c('created user')
    }, mounted : function () {
	c('mounted user')
	loader(0);
    }, template :`<div><form id="form" class="appLogin">
	    <div>
		<label for="username">Username</label>
		<span v-html="icon('person')"></span>
	    </div>  
	    <div id="username" name="username" class="input-text" >{{username}}</div>
	    <div>Password Change</div>
	    <div>
		<label for="password">Old Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="password" id="password" name="password" class="input-text" v-validate="'required'"  />
	    <div>
		<label for="password">New Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNew" id="passwordNew" name="password" class="input-text" v-validate="'required'"  />
	    <div>
		<label for="passwordNewR">Repeat Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNewR" id="passwordNewR" name="password" class="input-text" v-validate="'required'"  />
	    <div v-if="password!=='' && password!==null && passwordNew!=='' && passwordNew!==null && passwordNew===passwordNewR" >
		<button @click.prevent="login" class="btn btn-danger">Change</button>
	    </div>
	    <div v-if="err" class="danger" id ="err">{{err}}</div>
	</form></div>`
};
var exit = {
    created : function(){
	loader(1);
	c('created exit');
	router.push('/');
    }, mounted : function () {
	c('mounted exit')
	loader(0);
    }, template :`<div>exit</div>`
};
var pages = [
    { path: 'dash',
    name: 'dashboard',
    component: dash,
    logo : icon('dashboard')
    },
    { path: 'configCharts',
    name: 'Charts',
    component: configCharts,
    logo : icon('graph')
    },
    { path: 'configUsers',
    name: 'Users',
    component: configUsers,
    logo : icon('organization')
    },
    { path: 'configGroups',
    name: 'Groups',
    component: configGroups,
    logo : icon('package')
    },
    { path: 'blank',
    name: 'blank0',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank1',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank2',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank3',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank4',
    component: blank,
    logo :''
    },
    { path: 'conf',
    name: 'conf',
    component: conf,
    logo : icon('tools')
    },
    { path: 'user',
    name: 'user',
    component: user,
    logo : icon('person')
    },
    { path: 'exit',
    name: 'exit',
    component: exit,
    logo : icon('sign-out')
    }
];
function  vueFunc(){
    router = new VueRouter({
	mode: 'abstract',
	routes: [
	    {path: '/', component: login}, 
	    { path: '/main', 
	    component:  main,
	    children: pages}
	]
    });
    Vue.component('modal', {
	template: modal
    });
    vue  = new Vue({
	router,
	validations: {}
	, el: '#app'
	, data : {
	    path :"query",
	    selectInterval : ["minute","5 minutes","30 minutes","1 hour","2 hours","4 hours","8 hours","day","week","month","year"],
	    selectIntervalVal : [60,300,1800,3600,7200,14400,28800,86400,604800,2629746,31556952],
	    selectChart : ["line","bar"],
	    showModal : false
	}, created : function (){router.replace('/')
	}, mounted : function (){
	}, updated : function (){
	}, methods : {
	    showAlert : function(msg){
		vue.$data.showModal = msg;   
	    }
	}
    });
};
