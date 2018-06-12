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
	    <div class="main">

		<table>
		<thead><tr><th>username</th><th>email</th><th>active</th></tr></thead>
		<tr v-for="i in selectUser"><td>{{i.username}}</td><td>{{i.email}}</td><td>{{i.active}}</td><td></tr>
		</table>
		</div>
	</div>`
};