var confUsers = {
	data () {
		return {
			user : {},
			selectUser :[],
		}
    }, created (){
	    vue.loader(1);
	    c('created confUsers')

    }, mounted () {
	    this.$nextTick(function () {
			c('mounted confCharts');
			this.getUsers();
			vue.loader(0);
		});  
    }, methods : {
		getUsers : function () {
			data = this.$data;
			vue.getData({"path":"query/users"}, function(err,res){
				if(res){
					c(res)
					data.selectUser=res;
				} else {
					vue.showModAlert('could not find users');
				};
			});
		}
	}, template :
	`<div class="appMain">
	    <div class="mainMenu">
		<div><div><span v-html="icon('organization')"></span><label>Users</label></div><select v-if="selectUser.length>0" id="selectUser" v-model="user" ><option selected value></option><option v-for="i in selectUser" :value="i">{{i.username}}</option></select></div>
		</div>
	    <div class="mainMain">
		<div><div><span v-html="icon('text-size')"></span><label>name</label></div><input id="username" type="text" v-model="user.username"></input></div>
		<div><div><span v-html="icon('text-size')"></span><label>active</label></div><input id="active" type="text" v-model="user.active"></input></div>
		</div>
	</div>`
};