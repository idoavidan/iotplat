var home = {
	data () {
		return	{
			devices:[
				{'device_id':'pi0-11','device_name':'FS','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-14','device_name':'LM','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-13','device_name':'SERVER','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-17','device_name':'CONSUMABLES','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-18','device_name':'PAPERSTORE','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-19','device_name':'QC','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-10','device_name':'pi0-10','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-15','device_name':'pi0-15','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]},
				{'device_id':'pi0-16','device_name':'pi0-16','device_sensors':[{'sensor_id':'am2302H','sensor_name':'Hum','value':''},{'sensor_id':'am2302T','sensor_name':'Temp','value':''}]}
			],
			selectDash :[
				{"name":"factpi0-10am2302H","group_name":"fact","device_id":"pi0-10","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"factpi0-10am2302T","group_name":"fact","device_id":"pi0-10","sensor_id":"am2302T","interval":1800,"chart":"bar","color":"#00a600","min":"20","minColor":"#0000FF","max":"26","maxColor":"#ff0000"},
				{"name":"factpi0-10am2302TPIR","group_name":"fact","device_id":"pi0-10","sensor_id":"pir","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"factpi0-10am2302T","group_name":"fact","device_id":"pi0-10","sensor_id":"am2302T","interval":1800,"chart":"bar","color":"#00a600","min":"20","minColor":"#0000FF","max":"26","maxColor":"#ff0000"},
				{"name":"FS-Humidity","group_name":"fact","device_id":"pi0-11","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"FS-Temp","group_name":"fact","device_id":"pi0-11","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"SERVER-H","group_name":"fact","device_id":"pi0-13","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"SERVER-T","group_name":"fact","device_id":"pi0-13","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"LM-H","group_name":"fact","device_id":"pi0-14","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"LM-T","group_name":"fact","device_id":"pi0-14","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"factpi0-15am2302H","group_name":"fact","device_id":"pi0-15","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"factpi0-15am2302T","group_name":"fact","device_id":"pi0-15","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"factpi0-16am2302H","group_name":"fact","device_id":"pi0-16","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"factpi0-16am2302T","group_name":"fact","device_id":"pi0-16","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"CONSUMABLES-H","group_name":"fact","device_id":"pi0-17","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"CONSUMABLES-T","group_name":"fact","device_id":"pi0-17","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"PAPERSTORE-H","group_name":"fact","device_id":"pi0-18","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"PAPERSTORE-T","group_name":"fact","device_id":"pi0-18","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"},
				{"name":"QC-H","group_name":"fact","device_id":"pi0-19","sensor_id":"am2302H","interval":1800,"chart":"line","color":"#000000","min":"40","minColor":"#0000FF","max":"60","maxColor":"#ff0000"},
				{"name":"QC-T","group_name":"fact","device_id":"pi0-19","sensor_id":"am2302T","interval":1800,"chart":"line","color":"#00a600","min":"","minColor":"#0000FF","max":"","maxColor":"#ff0000"}
			],
			selectChart: vue.selectChart,
			dashConfig : '',
			charts:{}
		}
	}, created : function(){
		vue.$data.isLoader=true;
		c('created home');
		var t = this;
		addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
			addScript({"path":"./js/Chart.min.js","name":"Chart.min.js"},function(){
				addScript({"path":"/socket.io/socket.io.js","name":"socket.io.js"},function(){
						t.loopDash();
						var socket = io();
						socket.on('connect', function(){
							socket.on('feed', function(data){
							t.addData(t.$data.charts[data.device_id+data.sensor_id],data.timeS,data.data);
							t.removeData(t.$data.charts[data.device_id+data.sensor_id])
							x = t.$data.devices.find(o=>o.device_id===data.device_id);
								if (x){
									x.device_sensors.find(o=>o.sensor_id===data.sensor_id).value=data.data;
								}
							});
						});
				});
			});
		});
	}, mounted : function () {
		vue.$data.isLoader=false;
		c('mounted home')
	}, methods : {

		loopDash : function(){
			vue.$data.isLoader=true;
			var t = this;
			var d = t.$data;
			if (d.selectDash.length===0){
				vue.$data.isLoader=false;
				vue.tstW('No dashborads defined')
			} else{
				d.selectDash.map(o=>{
				d.isLoader=true;
					if(o.sensor_id){
						var dt= Date.now();
						vue.getData({"path":"query/feedsByIndex","parent":"device_id","parentVal":o.device_id,"index":"sensor_id","value":o.sensor_id,
						"from":dt-o.interval*1000,"to":dt}
						, function(err,res){
							vue.$data.isLoader=false;
							d.dashConfig=o;
							if(res && res.length>0){
								x = d.devices.find(i=>i.device_id===o.device_id);
								if (x){
									x.device_sensors.find(i=>i.sensor_id===o.sensor_id).value=res.slice(-1)[0].data ;
								}
								t.showChart(res);
							} else if (res){
								t.showChart([{data:'','device_id':o.device_id,sensor_id:o.sensor_id,'timeS':dt-o.interval*1000},
								{data:'','device_id':o.device_id,sensor_id:o.sensor_id,'timeS':dt}])
								c('No data found'+o.name);
							} else {
								c(err);
								vue.tstW('No data found')
							};
						});
					};
				});
			};
		}, getCharts: function(o){
			return this.$data.selectDash.filter(rec=>rec.device_id ===o.device_id);
		}, addData : function (chart, label, data) {
			chart.data.labels.push(label);
			chart.data.datasets.forEach((dataset) => {
				dataset.data.push(data);
			});
			chart.update();
		}, removeData : function (chart) {
			chart.data.labels.shift();
			chart.data.datasets.forEach((dataset) => {
				dataset.data.shift();
			});
			chart.update();
		},	showChart : function(msg){
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
			var labels=[];
			var data=[];
			var dataColor=[];
			var type=ddd.chart ? ddd.chart : t.$data.selectChart[0];
			var label=ddd.name || (ddd.group_name+'-'+ddd.device_id+'-'+ddd.sensor_id);
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
			t.$data.charts[ddd.device_id+ddd.sensor_id]= new Chart(vue.el(ddd.device_id+ddd.sensor_id).getContext('2d'), {
				type: type,
				data: {
					labels: labels,
					datasets: [{
						type: type,
						fill:false,
						label: label,
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
	`<div class="container" v-cloak>
			 <b-collapse class="card" v-for="o in devices" :open="false">
			 <div slot="trigger" slot-scope="props" class="card-header">
                <p class="card-header-title">
                    {{o.device_name}}
					<span v-for="s in o.device_sensors"><b-tag> {{s.sensor_name}}:{{s.value|| '____'}} </b-tag></span>
                </p>
				<p class="card-header-title">
				
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content columns">
                <div class="column" v-for="rec in getCharts(o)" :key="rec" v-bind:class="{'is-6':getCharts(rec,o).length===2,'is-4':getCharts(rec,o).length===3}">
						<!-- <canvas style="height:160px" v-bind:id="rec.device_id+rec.sensor_id"></canvas> -->
						<canvas style="height:160px" v-bind:id="rec.device_id+rec.sensor_id"></canvas>
                </div>
            </div>
			 </b-collapse>
        </div>`
}