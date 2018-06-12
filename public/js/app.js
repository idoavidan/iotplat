var c = console.log.bind(console);
var vue
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
function  vueFunc(){
    var router = new VueRouter({
	mode: 'abstract',
	routes: [
	    login,
	    main
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
	}, created : function (){
	}, mounted : function (){router.replace('/')
	}, updated : function (){
	}, methods : {
	    loader : function (data){
		var l = vue.el('loader').style;
		if (data===1){
		    l.display=""
		} else {
		    l.display="none";
		};
	    }, allowDrop : function (ev) {
		ev.preventDefault();
	    }, drag : function (ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	    }, drop : function (ev) {
		ev.preventDefault();
		var d = ev.dataTransfer.getData("text");
		ev.target.appendChild(vue.el(d));
	    }, showModAlert : function(msg){
		vue.$data.showAlert = msg;   
	    }, getData : function (data,callback){
		var xhr = new XMLHttpRequest();
		xhr.open("POST", data.path, true);
		//Send the proper header information along with the request
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onload = function(e) {//Call a function when the state changes.
		    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0) {
			callback(null,JSON.parse(xhr.response));
		    } else if (xhr.status === 401){
			vue.nav('/main/exit')
			c(xhr,null);
			callback(xhr,null);
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
		var user = vue.isJson(vue.gs('user'),{'user':{'token':null}});
		data.access_token =  user && user.token!==undefined ? user.token : null;
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
		    vue.showModAlert('Please allow cookies')	
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
