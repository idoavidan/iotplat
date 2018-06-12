var socket;
var charts = {};
var dash = {
	data () {
		return	{
			selectDash : this.getDash(),
			datas : {},
			labels : {},
		}
	}, created : function(){
		vue.loader(1);
		var t = this;
		addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
			// var dashes = this.getDash();
		});
		this.$data.selectDash.map(dash => this.askData(dash, Date.now()));
		vue.loader(0);
	}, mounted : function () {
		t=this;
		addScript({"path":"/socket.io/socket.io.js","name" : "socket.io.js"},function(){
			t.updateDash()
		})
}, methods : {
	updateDash : function(){
		socket = io();
		socket.on('connect', function(){
			socket.on('feed', function(data){
				
			});
		});
	},
	getDash : function () {
		return vue.gs('dash') ? JSON.parse(vue.gs('dash')) : [];
	},
	
	askData : function(o, dt){
		var data;
		t = this;
		vue.getData({"path":"query/feedsByIndex","index":"sensor-id","value":o.sensor,
		"from":dt-o.interval,"to":dt}
		, function(err,res){
			if(res){
			t.$data.datas[o.name] = res.map(o => o.data);
			t.$data.labels[o.name] = res.map(o => o.time);
			t.createGraph(o.name);
		} else {
			c(err);
			alert('No data found')
		};
	});
	},
	paintDots : function(data) {
		if(o.data<ddd.min){
			dataColor.push(ddd.minColor);
		} else if(o.data>ddd.max){
			dataColor.push(ddd.maxColor);
		} else{
			dataColor.push(ddd.color||'black');
		};
	},
	buildGraph : function(name, labels, data,labels){
		 return {
			nameItem: name,
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					type: "line",
					fill:false,
					label: name,
					data: data,
					pointBackgroundColor : "black",
					backgroundColor : "yellow",
					fillColors : "green",
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
				ticks : {
					source : "labels"
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}],
					xAxes: [{
						time: {
							type : "time",
							unit: 'millisecond',
							// displayFormats: {
							// 	millisecond : 'h:mm:ss.SSS a'
							// },
							
						}
				}]
			}
		}
	};
},
createGraph : function(name){

		chartsConfig = this.buildGraph(name,"",
					this.$data.datas[name],
					this.$data.labels[name]);
		
		console.log(chartsConfig)

		charts[name] = 
			new Chart(vue.el(chartsConfig.nameItem).getContext('2d'), chartsConfig)

	},
	say : function(){
		charts["sensorsensoram2302T"].data.labels.push(Date.now()/1000);
		charts["sensorsensoram2302T"].data.datasets.forEach((dataset) => {
			dataset.data.push(40);
		});
		charts["sensorsensoram2302T"].update();
	}}, template :
	`<div class="mainDash">
	<button v-on:click="say('what')">Say what</button>
	<canvas v-if="i.sensor" v-for="i in selectDash" v-bind:id="i.name">{{i.name}}</canvas>
	</div>`
}