var confUsers = {
	data () {
		return {
			activeTab: 1,
			user : {'username':'','name':'','surname':'','email':'','role':[],'graphs':[],'active':true},
			userDef : {'username':'','name':'','surname':'','email':'','role':[],'graphs':[],'active':true},
			tabColumns: [{
				field: 'username',
				label: 'Username',
				width: '40',
				sortable : true,
				centered: true
			},{
				field: 'first_name',
				label: 'Name',
				width: '40',
				sortable : true,
				centered : true
			},{
				field: 'last_name',
				label: 'Surname',
				width: '40',
				sortable : true,
				centered : true
			},{
				field: 'email',
				label: 'Email',
				width: '40',
				sortable : true,
				centered : true
			},{
				field: 'active',
				label: 'Active',
				width: '40',
				sortable : true,
				centered : true
			},],
			selectUser :[],
		}
    }, created (){
	    vue.$data.isLoader=true;
	    c('created confUsers');
    }, mounted () {
	    this.$nextTick(function () {
			c('mounted confCharts');
			this.getUsers();
			Vue.component('userAdmin', userAdmin);
		});  
    }, methods : {
		getUsers : function () {
			vue.$data.isLoader=true;
			data = this.$data;
			vue.getData({"path":"query/users"}, function(err,res){
				vue.$data.isLoader=false;
				if(res){
					c(res)
					data.selectUser=res;
				} else {
					vue.showModAlert('could not find users');
				};
			});
		}, compEvent : function(data){
			vue.tstW(data);
			if(data==='left'){
				this.$data.activeTab--;
			} else if(data=='right'){
				this.$data.activeTab++;
			} else if(data=='save'){
				this.saveDash();
			} else if(data=='del'){
				vue.tstS('del')
			}
		}
	}, template :
	`<div>
		<b-tabs type="is-boxed" v-model="activeTab" @change="if(activeTab===0){user=null}">
			<b-tab-item label="New" icon="account-plus">
				<userAdmin v-bind:user="userDef" v-on:compEvent="compEvent($event)"></userAdmin>
			</b-tab-item>
			<b-tab-item label="Users" icon="account-multiple">
				<b-table bordered
					narrowed
					:data="selectUser"
					:columns="tabColumns"
					focusable class="column"
					:selected.sync="user"
					paginated
					:per-page="10">
				</b-table>
			</b-tab-item>
			<b-tab-item label="Edit" icon="account-edit" :disabled="user===null">
				<userAdmin v-bind:user="user"></userAdmin>
			</b-tab-item>
		</b-tabs>
	</div>`
};