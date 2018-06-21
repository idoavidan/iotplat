var pages = [
	{ path: 'dash',
    name: 'Dashboard',
	component: dash ,
    icon : 'speedometer'
    },
    { path: 'confCharts',
    name: 'Charts',
    component: confCharts,
     icon : 'finance'
    },
    { path: 'history',
    name: 'History',
    component: hist,
     icon : 'view-list'
    },	
    { path: 'confUsers',
    name: 'Users',
    component: confUsers,
    icon : 'account-multiple'
    },
    { path: 'confGroups',
    name: 'Groups',
    component: confGroups,
    icon : 'group'
    },
    { path: 'conf',
    name: 'Configuration',
    component: conf,
    icon : 'wrench'
    }
];
var main = { 
	path : '/main', 
	name : main,
	children: pages,
	component: {
		data (){
			return {
				navIsActive: false,
				isUserModal:false,
				user: vue.isJson(vue.gs('user'),{'user':''})
			}
		}, created : function(){
			c('created main')
			addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
				vue.nav('/main/confCharts')
			});
		}, mounted () {
			Vue.component('userModal', userModal);
			// vue.$components.push(userModal);
		}, methods : {
			changePage (e) {
				vue.nav('/main/'+e);
				vue.$data.isLoader=true;
			},toggleMenu: function () {
				this.navIsActive = !this.navIsActive
			}
		}, template :
		`<div>
		<b-loading :is-full-page="true" :active.sync="vue.$data.isLoader" :can-cancel="false"></b-loading>
		<nav class="navbar is-dark is-fixed-top " role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a role="button" class="navbar-burger burger" @click="toggleMenu" 
			style="color:white" :class="{'is-active': navIsActive}" data-target="mainNav"
			aria-label="menu" aria-expanded="false">
			  <span aria-hidden="true"></span>
			  <span aria-hidden="true"></span>
			  <span aria-hidden="true"></span>
			</a>
		</div>
		<div id="mainNav" class="navbar-menu is-Danger" :class="{'is-active': navIsActive}">
			<div class="navbar-start">
				<div class="nav-item" v-for="rec in pages">
					<button class="button is-dark is-fullwidth" @click.prevent="vue.nav('/main/'+rec.path)">
					<b-icon :icon="rec.icon"></b-icon><span>{{rec.name}}</span></button>
				</div>
			</div>
			<div class="navbar-end">
				<button class="nav-item button is-dark is-fullwidth" @click="isUserModal = true"><b-icon icon="account"></b-icon></button>
				<button class="nav-item button is-dark is-fullwidth" @click="vue.logout"><b-icon icon="logout"></b-icon></button>
			</div>
		</div>
		</nav>
		<router-view></router-view>
		<b-modal :active.sync="isUserModal" has-modal-card >
            <userModal v-bind="user"></userModal>
        </b-modal>
	</div>`
	}
}