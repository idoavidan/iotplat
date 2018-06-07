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
var appData={"selectChart":["line","bar"]};
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
    xhr.open("POST", data.path, true);
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
    data.access_token=gs('token');
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
start();
var mainChart;
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
      </transition>`;
var modAlert = 
    `<transition name="modal">
	<div class="modal-mask">
	  <div class="modal-wrapper">
	    <div class="modal-container-alert">
	      <div class="modal-header">
		<slot name="header">
		</slot>
	      </div>
	      <div class="modal-body">
		<slot name="body">
		</slot>
	      </div>
	      <div class="modal-footer">
		<slot name="footer">
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
	    username: "max",
	    password: "max",
	    token: null,
	    err: null
	}
    }, created : function (){
	c('created login');
	ls(['user',this.$data.username]);
	this.login()
    }, mounted : function (){ 
	c('mounted login');
    }, updated : function (){
	el('username').focus();
    }, methods : {
	login : function () {
	    c(this.$data.username)
	    getData({"path":"login","username": this.$data.username,"password":this.$data.password}, function(err,res){
		c(res)
		if(res.token){
		    router.push('/main');
		    ls(['token',res.token]);
		} else {
		    c(err);
		}
	    });
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
	router.push('/main/'+'confCharts');
	});
    }, mounted : function () {
	c('mounted main')
    }, methods : {
	changePage : function (e) {
	    router.push('/main/'+e);
	}
    }, template :
	`<div><div id="loader" class="lds-dual-ring centered"></div>
	    <modAlert v-if="vue.$data.showAlert" @close="vue.$data.showAlert = false">
		<h3 id="modAlert" slot="header">{{vue.$data.showAlert}}</h3>
	    </modAlert>
	    <modal v-if="vue.$data.showModal" @close="vue.$data.showModal = false">
		<h3 id="modModal" slot="header">{{vue.$data.showModal}}</h3>
	    </modal>
	     <div name="bar"><div class="appMenu menubar" role="navigation"> <router-link v-for="rec in pages" :to="{ name: rec.name }"><span v-html="rec.logo"></span></a> </li></div></div>
	    <router-view></router-view>
	</div>`
};
var confCharts = {
     data () {
	return	{
	    interval : '',
	    chart : '',
	    selectChart : ['','bar','line','map'],
	    dashConfig : {minColor:'#0000FF',maxColor:'#ff0000',chart:'line',interval:604800},
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
	loader(1);
	addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
	});
    }, mounted () {
	this.$nextTick(function () {
	    c('mounted confCharts');
	    loader(0);
	})    
    }, methods : {
	getGroups : function(){
	    t = this;
	    if (!gs('groups')){
		getData({"path":"query/groups"}, function(err,res){
		    if(res){
			ls(['groups',JSON.stringify(res)]);
			t.selectGroups=res;
		    } else {
			c(err);
		    }
		});
	    } else{
		return JSON.parse(gs('groups'));
	    };
	}, getDash : function () {
	   return gs('dash') ? JSON.parse(gs('dash')) : [];
	}, dashLoad : function(){
	    if (el('selectDash')===null || el('selectDash').value===''){
		this.destroyChart();
		return true;
	    } else {
		return false;
	    };
	}, saveDash : function () {
	    var data = this.$data;
	    if(!data.dashConfig.sensor){vue.showModAlert('No sensors');return;} ;
	    data.dashConfig.name = data.dashConfig.name || (data.dashConfig.group+data.dashConfig.device+data.dashConfig.sensor);
	    var data = this.$data.dashConfig
	    if(!data.sensor){
		vue.showModAlert('No sensors');
		return;
	    } else{
		getData({"path":"query/saveGraph","username":"ido","graph":data}, function(err,res){
		    c(res)
		    if(res){
			vue.showModAlert('dashboard saved');
			var d = this.getDash();
			var pos = d.findIndex(o => o.name === data.dashConfig.name);
			if (pos!=-1){
			    d[pos]=data.dashConfig;	
			} else{
			    d.push(data.dashConfig);
			};
			ls(['dash',JSON.stringify(d)]) ;
		    } else {
			vue.showModAlert('dashboard not saved, see log');
			c(err);
		    }
		});
	    }
	}, getGroup : function(){
	    c('gg')
	    t  = this;
	    if (!gs('group_'+t.$data.dashConfig.group)){
		getData({"path":"query/group","group_id":t.$data.dashConfig.group}, function(err,res){
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
	}, changeChart : function(){	    
	    d = this.$data.dashConfig;
	    if(d.interval && d.sensor){
		var dt= Date.now();
		getData({"path":"query/feedsByIndex","index":"sensor","value":d.sensor,
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
	    if (mainChart && el("mainChart")){mainChart.destroy(); c('main');el("mainChart").innerHTML="";}; 
	}, showChart : function(msg){
	    var ddd = this.$data.dashConfig;
	    var labels = [];
	    var data = [];
	    var dataColor = [];
	    var type = ddd.chart ? ddd.chart : this.$data.selectChart[0];
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
	    mainChart = new Chart( el('mainChart').getContext('2d'), {
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
		<div><div><span v-html="icon('dashboard')"></span><label>dashboard</label></div><select id="selectDash" v-model="dashConfig" @change="getDash()"><option selected value></option><option v-for="i in selectDash" :value="i">{{i.name}}</option></select></div>	
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
    created : function(){
	    loader(1);
	    c('created confGroups')
    }, mounted : function () {
	    c('mounted confGroups')
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
	    chart : '',
	    selectChart: ['line','bar','map'],
	    dashConfig : '',
	    selectDash : this.getDash(),
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
		    var dt= Date.now();
		    getData({"path":"query/feedsByIndex","index":"sensor","value":o.sensor,
		    "from":dt/1000-o.interval,"to":dt/1000}
		    , function(err,res){
			if(res){
			    t.$data.dashConfig=o;
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
	    var ddd = this.$data.dashConfig;
	    var charts={};
	    var labels=[];
	    var data=[];
	    var dataColor=[];
	    var type=ddd.chart ? ddd.chart : this.$data.selectChart[0];
	    msg.map(o=>{
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
	    c(ddd)
	    charts[ddd.name]= new Chart( el(ddd.name).getContext('2d'), {
		type: type,
		data: {
		    labels: labels,
		    datasets: [{
			    type: type,
			    fill:false,
			    label: ddd.group+'-'+ddd.device+'-'+ddd.sensor,
			    data: data,
			    pointBackgroundColor : dataColor,
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
	    <canvas v-if="i.sensor" v-for="i in selectDash" v-bind:id="i.name">{{i.name}}</canvas>
	</div>`
};
var confUsers = {
    data : function() {
	return {
	    users : {}
	}
    }, created : function(){
	    loader(1);
	    c('created confUsers')
    }, mounted : function () {
	    c('mounted confUsers')
	    loader(0);
     }, methods : {
	 getUsers : function () {
	   return gs('dash') ? JSON.parse(gs('dash')) : [];
	},
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
    { path: 'confCharts',
    name: 'Charts',
    component: confCharts,
    logo : icon('graph')
    },
    { path: 'confUsers',
    name: 'Users',
    component: confUsers,
    logo : icon('organization')
    },
    { path: 'confGroups',
    name: 'Groups',
    component: confGroups,
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
    Vue.component('modAlert', {
	template: modAlert
    });
    vue  = new Vue({
	router,
	validations: {}
	, el: '#app'
	, data : {
	    path :"query",
	    selectInterval : [60,300,1800,3600,7200,14400,28800,86400,604800,2629746,31556952],
	    selectChart : ["line","bar"],
	    showModal : false,
	    showAlert : false
	}, created : function (){router.replace('/')
	}, mounted : function (){
	}, updated : function (){
	}, methods : {
	    showModAlert : function(msg){
		vue.$data.showAlert = msg;   
	    }
	}
    });
};
