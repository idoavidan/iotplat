var appData={"groupSelect":[],"sensorSelect":{},
"interval":["minute","5 minutes","30 minutes","1 hour","2 hours","4 hours","8 hours","day","week","month","year"],
"chart":["line","bar"]}
function el(data){
	return document.getElementById(data);
};
//request data 
function getData(data){
	if (data.el && data.el==="groupSelect" && appData.groupSelect.length!==0){
		return;
	} else if(data.el && data.el==="sensorSelect" && appData.sensorSelect[data.value].length!==0){
		el(data.el).innerHTML="<option selected value>Sensors </option>";
		appData.sensorSelect[data.value].map(function(o){
			el(data.el).innerHTML+='<option>'+o+'</option>';
		})
		return;
	} else if(data.el && data.el==="sensorSelect" && appData.sensorSelect[data.value].length===0){
		el(data.el).innerHTML="";
	};
	var xhr = new XMLHttpRequest();
	xhr.open("POST", data.path, true);
	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onload = function(e) {//Call a function when the state changes.
		if(data.el && xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0) {
			JSON.parse(xhr.response).map(function (o){
				el(data.el).innerHTML+='<option>'+o+'</option>';
				if(data.el==="groupSelect"){appData[data.el].push(o);appData.sensorSelect[o]=[]}
				else{appData.sensorSelect[data.value].push(o)};
			});
		} else if (data.path==="feedsByIndex" && xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200  && xhr.response.lenght!==0){
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
function start(){
	getData({"el":"groupSelect","path":"general","index":"name"});
	appData.interval.map(o=>{
		el("intervalSelect").innerHTML+='<option>'+o+'</option>';
	});
	appData.chart.map(o=>{
		el("chartSelect").innerHTML+='<option>'+o+'</option>';
	})
}

function changeGroup(data){
	if(data){
		getData({"el":"sensorSelect","path":"general","index":"sensor","value":data});
	}
}
var x;
function changeSensor(data){
	if(data){
		getData({"path":"feedsByIndex","index":el("groupSelect").value,"value":data});
	}
}

function showChart(msg){
	var labels=[];
	var data=[];
	var type=el("chartSelect").value ? el("chartSelect").value :'line'
    msg.map(function(o){
		labels.push(o.time);
		data.push(o.data);
	});
	el("mainChart").innerHTML="";
	var ctx = el("mainChart").getContext('2d');
	var mainChart = new Chart(ctx, {
	type: type,
		data: {
		labels: labels,
		datasets: [{
			type: 'line',
			fill:false,
			label: el("groupSelect").value+'-'+el("sensorSelect").value,
			data: data,
			backgroundColor: el("colorSelect").value,
			borderWidth: 1
		}]
		},
		options: {
			responsive: false,
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
			stepSize: 1,
			beginAtZero: true
		}
	}]
			}
		}
	});
		
	};