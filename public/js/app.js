var appData={"path":"query","selectGroup":[],"selectDevice":[],"selectSensor":[],
"selectInterval":["minute","5 minutes","30 minutes","1 hour","2 hours","4 hours","8 hours","day","week","month","year"],
"selectIntervalVal":[60,300,1800,3600,7200,14400,28800,86400,604800,2629746,31556952],
"selectChart":["line","bar"]}

function el(data){
	return document.getElementById(data);
};

//request data 
function getData(data,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", appData.path+'/'+data.path, true);
	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onload = function(e) {//Call a function when the state changes.
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0) {
			callback(JSON.parse(xhr.response));
		} else if (data.path==="query/feedsByIndex" && xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0){
			showChart(JSON.parse(xhr.response));
		} else if (xhr.status !== 200){
			alert('error, please check console');
			console.log(xhr)
		} else {
			alert('error, please check console');
			console.log(xhr)
		}
	}
		xhr.send(JSON.stringify(data)); 
}

function gen(data){
	el(data.el).innerHTML='<option></option>';
	var len = appData[data.el].length ? appData[data.el].length : Object.keys(appData[data.el]).length;
	if (len!==0 && data.el!=='selectSensor'){
		appData[data.el].map(o=>{
			el(data.el).innerHTML+='<option>'+o+'</option>';
		});
	}
	else{
		getData({"path":data.path,"data":data},function (res){
			appData[data.el]=[];
			res.map(o=>{
				el(data.el).innerHTML+='<option>'+o+'</option>';
				appData[data.el].push(o);
			})
		});
	}
};
function start(){
	gen({"path":"groups","el":"selectGroup"});
	gen({"path":"names","el":"selectDevice"});
	gen({"el":"selectInterval"});
	gen({"el":"selectChart"});	
}

function changeGroup(data){
	return;
};
function changeDevice(data){
	gen({"path":"general","el":"selectSensor","index":"sensor","value":data});
};
function changeSensor(data){
	if(data){
		getData({"path":"feedsByIndex","index":"sensor","value":data},function(res){
			showChart(res);
		});
	}
}
function changeInterval(data){
		if(data){
			var d= Date.now();
			console.log();
			getData({"path":"feedsByIndex","index":"sensor","value":el("selectSensor").value,
				"from":d/1000-appData.selectIntervalVal[data],"to":d/1000},function(res){
					showChart(res);
				});
		};
}
var mainChart;
function showChart(msg){
	var labels=[];
	var data=[];
	var dataColor=[]
	var type=el("selectChart").value ? el("selectChart").value :'line';
    msg.map(function(o){
		d = new Date(o.time*1000); // The 0
		labels.push(String(d.getHours()).padStart(2,"0")+':'+String(d.getMinutes()).padStart(2,"0")+':'+String(d.getSeconds()).padStart(2,"0"));
		data.push(o.data);
		if(o.data<25 || o.data >35){
			dataColor.push("red");
		}
		else{
			dataColor.push(el("selectColor").value);
		}
	});
	el("mainChart").innerHTML="";
	if (mainChart){console.log(mainChart);mainChart.destroy()};
	var ctx = el("mainChart").getContext('2d');
	mainChart= new Chart(ctx, {
	type: type,
		data: {
		labels: labels,
		datasets: [{
			type: el('selectChart').value,
			fill:false,
			label: el("selectDevice").value+'-'+el("selectSensor").value,
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