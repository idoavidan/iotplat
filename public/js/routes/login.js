var login  = { 
	path: '/', 
	name:login,
	component: {
		data : function() {
			return {
				username: this.getUser().username,
				password: this.getUser().username,
				token: this.getUser().token,
				err: ''
			}
		}, created : function (){
			c('created login');
			if (this.$data.token){vue.nav('/main')}
		}, mounted : function (){ 
			c('mounted login');
		}, updated : function (){
		}, methods : {
			getUser:function() {
				var u = vue.gs('user');
				return u!==null && u ? JSON.parse(u) : {"username": "","password":"","token":""};
			},
			login : function () {
				d = this.$data;
				if (d.username && d.password){
					vue.getData({"path":"login","username": this.$data.username,"password":this.$data.password}, function(err,res){
					if(res.user){
						vue.ls(['user',JSON.stringify(res.user)]);
						vue.nav('/main');
					} else {
						d.err='wrong details'
					}
					});
				}
				else {
					d.err='please fill all details'
				}
			}
		}, template:
			`<div>
				<form v-if="!token" id="formLogin" class="appLogin">
					<div>
					<span v-html="icon('person')"></span>
					<label for="username">Username</label>		
					</div><div>
					<input type="text"  v-model="username" id="username" name="username" class="input-text" v-validate="'required'"/>
					</div>
					<div>
					<span v-html="icon('lock')"></span>
					<label for="password">Password</label>
					</div>
					<div>
						<input type="password" v-model="password" id="password" name="password" class="input-text" v-validate="'required'"></input>
					</div>
					<div></div>
					<div>
						<button @click.prevent="login" class="btn btn-danger">Login</button>
					</div>
					<div v-if="err" class="danger" id ="err">{{err}}</div>
				</form>
			<div style="text-align: center"><img src="./img/logo.png"></img></div>
			</div>` 
	}
};