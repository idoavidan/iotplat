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
		vue.loader(1);
		c('created dash');
		var t = this;
	addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
		var d = t.getDash();
		t.getDash().map(o=>{
		if(o.sensor){
			var dt= Date.now();
			vue.getData({"path":"query/feedsByIndex","index":"sensor","value":o.sensor,
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
		vue.loader(0);
	});
	}, mounted : function () {
	c('mounted dash')
	}, methods : {
	getDash : function () {
	   return vue.gs('dash') ? JSON.parse(vue.gs('dash')) : [];
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
		charts[ddd.name]= new Chart( vue.el(ddd.name).getContext('2d'), {
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
}