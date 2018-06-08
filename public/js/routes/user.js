var user = {
    data : function() {
	return {
	    photo : null,
	    username: vue.gs('username'),
	    password: null,
	    passwordNew: null,
	    passwordNewR: null,
	    email: null,
	    err: null
	}
    },
    created : function(){
	vue.loader(1);    
	c('created user')
    }, mounted : function () {
	c('mounted user')
	vue.loader(0);
    }, template :`<div><form id="form" class="appLogin">
	    <div>
		<label for="username">Username</label>
		<span v-html="icon('person')"></span>
	    </div>  
	    <div id="username" name="username" class="input-text" >{{username}}</div>
	    <div>Password Change</div>
	    <div>
		<label for="password">Old Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="password" id="password" name="password" class="input-text" v-validate="'required'"  />
	    <div>
		<label for="password">New Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNew" id="passwordNew" name="password" class="input-text" v-validate="'required'"  />
	    <div>
		<label for="passwordNewR">Repeat Password</label>
		<span v-html="icon('lock')"></span>
	    </div>
	    <input type="password" v-model="passwordNewR" id="passwordNewR" name="password" class="input-text" v-validate="'required'"  />
	    <div v-if="password!=='' && password!==null && passwordNew!=='' && passwordNew!==null && passwordNew===passwordNewR" >
		<button @click.prevent="login" class="btn btn-danger">Change</button>
	    </div>
	    <div v-if="err" class="danger" id ="err">{{err}}</div>
	</form></div>`
};