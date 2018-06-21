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