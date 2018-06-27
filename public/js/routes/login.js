var login  = { 
	path: '/', 
	name:login,
	props: true,
	component: {
		data : function() {
			return {
				username:'',
				password: '',
				keep:'yes',
				err: ''
			}
		}, props:['user']
		, created : function (){
			c('created login');
			if (this.$props.user.token){
				vue.getData({"path":"reconnect"}, function(err,res){
					if (res){
						vue.nav('/main');
					};
				});
			};
		}, mounted : function (){ 
			c('mounted login');
		}, updated : function (){
		}, methods : {
			login : function () {
				d = this.$data;
				if (d.username && d.password){
					vue.getData({"path":"login","username": this.$data.username,"password":this.$data.password}, function(err,res){
					if(res.user){
						if (d.keep ==='yes'){
							vue.ls(['user',JSON.stringify(res.user)]);
						}else{
							localStorage.removeItem('user');
						}
						vue.$data.user=res.user;
						vue.nav('/main');
					} else {
						vue.tstW('Wrong details')
					}
					});
				}
				else {
					vue.tstW('Details missing')
				}
			}
		}, template:
			`<div >
				<form v-if="!user.token" id="formLogin" class="">
				<section class="columns">
				<div class="container is-offset-4 column is-4">
				    <b-field label="username" position="is-center">
						<b-input v-model="username" icon="account"></b-input>
					</b-field>
					<b-field label="password" position="is-center">
						<b-input type="password" icon="lock-question" v-model="password" password-reveal></b-input>
					</b-field>
					<b-field label="Keep Logged In" position="is-center">							
						<b-switch v-model="keep" type="is-danger" true-value="yes" false-value="no"></b-switch>
						<p class="control"><button class="button is-dark is-medium " @click.prevent="login">Login</button></p>
					</b-field>
					<p class="image is-offset-4 column is-4">
					<img src="./img/logo.png" ></img>
					</p>
				</div>
	
				</section>
				</form>
	</div>` 
	}
};