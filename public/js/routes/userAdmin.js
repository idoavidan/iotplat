const userAdmin = {
		data (){
			return {
				pass:'',
				activeTab: 0,
				tabColumns: [
				{
					field: 'name',
					label: 'name',
					width: '40',
					sortable : true,
					centered: true
				},{
					field: 'group_name',
					label: 'group',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'device_name',
					label: 'device',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'sensor_id',
					label: 'sensor',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'interval',
					label: 'interval',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'chart',
					label: 'chart',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'min',
					label: 'min',
					width: '40',
					sortable : true,
					centered : true
				},{
					field: 'max',
					label: 'max',
					width: '40',
					sortable : true,
					centered : true
				}
			]
		}
		}, props: ['name','email','username','active','admin','graphs']
		, template: `
            <form action="">
				<section>
				<b-tabs type="is-boxed" v-model="activeTab">
					<b-tab-item label="General" icon="account">
						<b-field label="Name">
							<b-input
								:value="name"
								placeholder="name"
								required>
							</b-input>
						</b-field>
						<b-field label="Email">
							<b-input
								type="email"
								:value="email"
								placeholder="Your email"
								required
								icon="email">
							</b-input>
						</b-field>
					</b-tab-item>
					<b-tab-item label="Permissions" icon="account-network">
						<b-field label="Admin">
							<b-switch 
							v-model="admin"
							true-value="true"
							false-value="false"
							type="is-danger">
							</b-switch>
						</b-field>
						<b-field label="Active">
							<b-switch 
							v-model="active"
							true-value="true"
							false-value="false"
							type="is-danger">
							</b-switch>
						</b-field>
					</b-tab-item>
					<b-tab-item label="Security" icon="lock-question">
					<b-field label="Password">
						<b-input
						type="password"
						:value="pass"
						password-reveal
						placeholder="password"
						icon="lock-question">
						</b-input>
					</b-field>
					</b-tab-item>
				<b-tab-item label="Dashboards" icon="speedometer">
					<b-table bordered
					narrowed
					:data="graphs"
					:columns="tabColumns"
					class="column"
					>
				</b-table>
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
			</form>
			</section>
    <form>`
}