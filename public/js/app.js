var c = console.log.bind(console);
var vue;
//var myWorker = new Worker('./js/app2.js');
function addScript(data,callback) {
    var s = document.createElement('script');
    if(localStorage.getItem(data.name)){
	s.setAttribute('src', localStorage.getItem(data.name));
    } else{
	getFile({"path":data.path,"type":"application/javascript"}, function(res) {
	    s.setAttribute('src', res);
	    localStorage.setItem(data.name,res);
	});
    };
    document.body.appendChild(s);
    s.onload = function (){
	callback();
    };
};
function getFile(data,callback){
    var xhr = new XMLHttpRequest(),
	blob,
	fileReader = new FileReader();
    xhr.open("GET", data.path, true);
    xhr.timeout=10000;
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
	    vue.tstW('error '+xhr.status+' , please check console');
	    c(xhr);
	} else {
	    vue.tstW('error, please check console');
	    c(xhr);
	};
    };
    xhr.ontimeout = function (e){
	vue.tstW('Timeout, please check connection');
	callback('timeout',null);
    };
    xhr.send(JSON.stringify(data)); 
};

function start(){
    addScript({"path":"./js/vue.min.js","name":"vue.min.js"},function(){
	 addScript({"path":"./js/vue-router.js","name":"vue-router.js"},function(){
	    addScript({"path":"/socket.io/socket.io.js","name":"socket.io.js"},function(){
		vueFunc()
	    });
	});
    });
};
start();
var mainChart;
function  vueFunc(){
    var router = new VueRouter({
	mode: 'abstract',
	routes: [
	    login,
	    main
	]
    });
    router.beforeEach((to, from, next) => {
	next();
    })
    vue  = new Vue({
	router,
	components:[],
	validations: {}
	, el: '#app'
	, data : function() {
	    return {
		user: this.getUser(),
		path :"query",
		selectInterval : [60,300,1800,3600,7200,14400,28800,86400,604800,2629746,31556952],
		selectChart : ['line','bar','pie','doughnut','map'],
		isLoader : false,
		isUserModal: false
	    }
	}, created : function (){
	    Vue.use(Buefy.default);    
	    var socket = io();
	    socket.on('connect', function(){
		socket.on('feed', function(data){
		    console.log(data);
		});
	    });
	}, mounted : function (){
	    router.replace('/');
	}, updated : function (){
	}, methods : {
	    getUser:function() {
		var u = this.gs('user');	
		return u!==null && u ? JSON.parse(u) : {"username": "","password":"","token":""};
	    }, logout :function(){
		localStorage.removeItem('user');
		window.location.replace('/');
	    }, tstS (msg){
		this.$toast.open({
                    message: msg,
                    type: 'is-success'
                })
	    }, tstW (msg){
		this.$toast.open({
                    message: msg,
                    type: 'is-danger'
                })
	    }, allowDrop : function (ev) {
		ev.preventDefault();
	    }, drag : function (ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	    }, drop : function (ev) {
		ev.preventDefault();
		var d = ev.dataTransfer.getData("text");
		ev.target.appendChild(vue.el(d));
	    }, getData : async function (data,callback){
		var xhr = new XMLHttpRequest();
		xhr.open("POST", data.path, true);
		xhr.timeout=10000;
		//Send the proper header information along with the request
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onload = function(e) {//Call a function when the state changes.
		    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0) {
			callback(null,JSON.parse(xhr.response));
		    } else if (xhr.status === 401){
			vue.logout();
			c(xhr,null);
			callback(xhr,null);
		    } else if (xhr.status !== 200){
			vue.tstW('error, please check console');
			c(xhr,null);
			callback(xhr,null);
		    } else {
			vue.tstW('error, please check console');
			c(xhr,null)
			callback(xhr,null);
		    };
		};  
		xhr.ontimeout = function (e){
		    vue.tstW('Timeout, please check connection');
		    callback('timeout',null);
		};
		var user = vue.isJson(vue.gs('user'),{'user':{'token':null}});
		data.access_token =  vue.$data.user && vue.$data.user.token!==undefined ? vue.$data.user.token : null;
		xhr.send(JSON.stringify(data)); 
	    }, isJson : function (data,alt){
		try {
		    return JSON.parse(data);
		} catch(e){
		    return alt;
		}
	    }, el : function (data){
		return document.getElementById(data);
	    }, ls : function (data){
		try {
		    localStorage.setItem(data[0],data[1]);
		    return true;
		} catch(e){
		    vue.tstW('Please allow cookies');
		    return false;
		};
	    }, gs : function (data){
		return localStorage.getItem(data);
	    }, nav : function (path){
		router.push(path);
	    }
	}
    });
};
