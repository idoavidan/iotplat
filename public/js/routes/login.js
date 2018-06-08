var login  = { 
	path: '/', 
	name:login,
	component: {
		data : function() {
			return {
				username: "",
				password: "",
				token: null,
				err: null
			}
		}, created : function (){
			c('created login');
			vue.ls(['user',this.$data.username]);
			// this.login()
		}, mounted : function (){ 
			c('mounted login');
		}, updated : function (){
		}, methods : {
			login : function () {
				vue.getData({"path":"login","username": this.$data.username,"password":this.$data.password}, function(err,res){
				if(res.token){
					vue.nav('/main');
					vue.ls(['token',res.token]);
				} else {
					c(err);
				}
				});
			}
		}, template:
			`<div><form id="formLogin" class="appLogin">
				<div>
				<label for="username">Username</label>
				<div v-html="icon('person')"></div>
				</div>  
				<input type="text"  v-model="username" id="username" name="username" class="input-text" v-validate="'required'"/>
				<div>
				<label for="password">Password</label>
				<div v-html="icon('lock')"></div>
				</div>
				<input type="password" v-model="password" id="password" name="password" class="input-text" v-validate="'required'"  />
				<div v-if="username!=='' && username!==null && password!=='' && password!==null" >
				<button @click.prevent="login" class="btn btn-danger">Login</button>
				</div>
				<div v-if="err" class="danger" id ="err">{{err}}</div>
				<div style="text-align: center"><img src="./img/logo.png"></img></div>    
			</form></div>` 
	}
}