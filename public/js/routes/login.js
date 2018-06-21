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
			
			<section class="section">      
				<form v-if="!token" id="formLogin" class="container column is-4 is-offset-4">
				    <b-field label="username">
            <b-input v-model="username" icon="account"></b-input>
        </b-field>
		<b-field label="password" >
            <b-input type="password" icon="lock-question"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
		<div style="text-align: center" > 
			<button class="button is-dark is-medium " @click.prevent="login">Login</button>
		</div>
		<div style="text-align: center"><img src="./img/logo.png"></img></div>
		</section>
			
	</div>` 
	}
};