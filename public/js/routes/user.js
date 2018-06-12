var user = {
    data () {
		return {
			photo : null,
			user: vue.isJson(vue.gs('user'),{'user':''}),
			password: null,
			passwordNew: null,
			passwordNewR: null,
			email: null,
			err: null
		}
    }, created (){
		vue.loader(1);    
		c('created user')
    }, mounted () {
		c('mounted user')
		vue.loader(0);
    }, template :`<div><form id="form" class="appLogin">
	    <div>
			<label for="username">Username</label>
			<span v-html="icon('person')"></span>
	    </div>  
		<div id="username" name="username" >{{user.username}}</div>
		<div>
			<label for="mail">email</label>
			<span v-html="icon('mail')"></span>
	    </div>  
			<input type="email" id="mail" name="mail" v-model="user.email"></input>
	    <div>Password Change</div>
	    <div>
			<label for="password">Old Password</label>
			<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="password" id="password" name="password" v-validate="'required'"  />
	    <div>
		<label for="password">New Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNew" id="passwordNew" name="password" v-validate="'required'"  />
	    <div>
		<label for="passwordNewR">Repeat Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNewR" id="passwordNewR" name="password" v-validate="'required'"  />
	    <div v-if="password!=='' && password!==null && passwordNew!=='' && passwordNew!==null && passwordNew===passwordNewR" >
		<button @click.prevent="login" class="btn btn-danger">Change</button>
	    </div>
	    <div v-if="err" class="danger" id ="err">{{err}}</div>
	</form></div>`
};