const userModal = {
		data (){
			return {
				pass:'',
				passN:'',
				keep:'yes',
				activeTab: 0
			}
		}, props: ['user']
		, template: `
            <form action="">
                <div class="modal-card" style="width: auto;min-height:500;min-width:400;">
                    <header class="modal-card-head">
                        <p class="modal-card-title"><b-icon icon="account"></b-icon>{{user.username}}</p>
                    </header>
                    <section class="modal-card-body">
						<b-tabs type="is-boxed" v-model="activeTab">
            <b-tab-item label="General" icon="account">
			  <b-field label="Email">
                            <b-input
                                type="email"
                                :value="user.email"
                                placeholder="Your email"
                                required
								icon="email">
                            </b-input>
                        </b-field>
            </b-tab-item>
            <b-tab-item label="Security" icon="lock-question">
                <b-field label="Password">
                            <b-input
                                type="password"
                                :value="pass"
                                password-reveal
                                placeholder="Current password"
								icon="lock-question"
                                >
                            </b-input>
                        </b-field>
						<b-field label="New Password">
                            <b-input
                                type="password"
                                :value="passN"
                                password-reveal
                                placeholder="New password" 
								icon="lock-question"
                                >
                            </b-input>
                        </b-field>
						<b-field label="Keep Logged In">
							<b-switch v-model="keep"
								type="is-danger"
								true-value="yes"
								false-value="no">
								{{keep}}
							</b-switch>
						</b-field>
            </b-tab-item>
        </b-tabs>
                        
                    </section>
                    <footer class="modal-card-foot">
					<p class="control">
					<button class="button is-dark is-medium" @click.prevent="vue.tstW('Save not implemented')">
					<b-icon icon="content-save"></b-icon></button></button></p>
                        <p class="control">
				<button class="button is-danger is-medium" @click.prevent="$parent.close()">
				<b-icon icon="cancel"></b-icon></button></button></p>
				</footer>
                </div>
            </form>`
}