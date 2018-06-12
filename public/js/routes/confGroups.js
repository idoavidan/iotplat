var confGroups = {
	data () {
		return {
			interval : '',
			chart : '',
			selectChart : ['','bar','line','map'],
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
		c('created confGroups');
		vue.loader(1);
    }, mounted () {
		this.$nextTick(function () {
			c('mounted confGroups');			
		});  
    }, methods : {
		getGroups : function(){
			t = this;
			vue.loader(1);
			vue.getData({"path":"query/groups"}, function(err,res){
				if(res){
					vue.ls(['groups',JSON.stringify(res)]);
					t.selectGroups=res;
				} else {
					c(err);
				}
				vue.loader(0);
			});
		}, getGroup : function(){
			t  = this;
			if (!vue.gs('group_'+t.$data.group)){
			vue.getData({"path":"query/group","group_id":t.$data.group}, function(err,res){
				if (res){
					vue.ls(['group_'+t.$data.group,JSON.stringify(res.group_devices)]);
					t.$data.selectDevices=res.group_devices;
				}
			});
			} else {
				t.$data.selectDevices = JSON.parse(vue.gs('group_'+t.$data.group));
			};
		}, changeDevice : function(){
			this.$data.selectSensors=this.$data.selectDevices.filter(({device_id}) => device_id === this.$data.device)[0].device_sensors;
		}
    }, template :
	`<div class="main">
		<div><div><span v-html="icon('package')"></span><label>groups</label></div>
		    <select id="selectGroup" size="2" v-model="group"><option v-for="i in selectGroups" :value="i">{{i.group_name}}</option></select>
		</div>
		<div class="selMulti" v-for="i in group.group_devices">
			<input type="textbox" v-model="group" readonly> {{i.group_name}} </input>
		</div>
		<div><div><span v-html="icon('device-mobile')"></span><label>group devices</label></div>
			<select size="2" class="selMulti" id="selectDevice" v-model="device"><option v-for="i in group.group_devices" :value="i">{{i.device_id}}</option></select>
		</div>
		<div><div><span v-html="icon('pulse')"></span><label>device sensors</label></div>
			<select size="2" class="selMulti" id="selectSensor" v-model="sensor"><option v-for="i in device.device_sensors" :value="i">{{i.sensor_id}}</option></select>
		</div>
		<div></div><div></div><div></div>
		<div><div><span v-html="icon('device-mobile')"></span><label>unassigned devices</label></div>
		    <select id="selectDevice" v-model="device"><option selected value="new">new</option><option v-for="i in group.group_devices" :value="i">{{i.device_id}}</option></select>
		</div>
		
	    <div><div><span v-html="icon('pulse')"></span><label>unassigned sensors</label></div>
				    <select size="2" class="selMulti" id="selectSensor" v-model="sensor"><option selected value="new">new</option>
			<option v-for="i in device.device_sensors" :value="i">{{i.sensor_id}}</option></select>
		</div>`
};