var confGroups = {
	data () {
		return {
			defaultSortDirection: 'desc',
			group : '',
			activeTab :0,
			groupColumns: [{
				field: 'group_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'group_name',
				label: 'Name',
				width: '40',
				sortable : true,
				centered : true
			}],
			selectGroups : '',
			device : '',
			deviceColumns: [{
				field: 'device_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'device_name',
				label: 'Name',
				width: '40',
				centered: true,
				sortable : true,
			}],
			sensor : '',
			sensorColumns: [{
				field: 'sensor_id',
				label: 'ID',
				width: '40',
				centered: true
			},{
				field: 'sensor_name',
				label: 'Name',
				width: '40',
				centered: true,
				sortable : true,
			}],
			selectSensors : '',
		}
    }, created () {
		c('created confGroups');
		vue.$data.isLoader=true;
    }, mounted () {
		this.$nextTick(function () {
			c('mounted confGroups');			
		});  
		this.getGroups();
    }, methods : {
		getGroups : function(){
			t = this;
			vue.$data.isLoader=true;
			vue.getData({"path":"query/groups"}, function(err,res){
				if(res){
					vue.ls(['groups',JSON.stringify(res)]);
					t.$data.selectGroups = res;
				} else {
					c(err);
				}
				vue.$data.isLoader=false;
			});
		}
    }, template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="">
			<b-tab-item label="Groups" icon="group">
			<b-tabs type="is-boxed" @change="">
			<b-tab-item label="New" icon="group">
				<b-table bordered narrowed
				:data="selectGroups"
				:columns="groupColumns"
				focusable class="column"
				:selected.sync="group"
				></b-table>
			</b-tab-item>
			<b-tab-item label="Groups" icon="group">
				<b-table bordered narrowed
				:data="selectGroups"
				:columns="groupColumns"
				focusable class="column"
				:selected.sync="group"
				></b-table>
			</b-tab-item>
			<b-tab-item label="Edit" icon="group">
				<b-table bordered narrowed
				:data="selectGroups"
				:columns="groupColumns"
				focusable class="column"
				:selected.sync="group"
				></b-table>
			</b-tab-item>
			</b-tabs>
			</b-tab-item>
			<b-tab-item label="Devices" icon="cellphone-link">
			<b-table
				:data="group.group_devices"
				:columns="deviceColumns"
				focusable class="column"
				:selected.sync="device">
			</b-table>
			</b-tab-item>
			<b-tab-item label="Sensors" icon="heart-pulse">
				<b-table
				:data="device.device_sensors"
				:columns="sensorColumns"
				focusable class="column"
				:selected.sync="sensor"
			></b-table>
			</b-tab-item>
		</b-tabs>
		</div>`
};