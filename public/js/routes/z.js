var pages = [
	{ path: 'dash',
    name: 'Home',
	component: dash ,
    icon : 'home',
	role:''
    },
    { path: 'history',
    name: 'History',
    component: hist,
     icon : 'view-list',
	 role:''
    },
    { path: 'conf',
    name: 'Configuration',
    component: conf,
    icon : 'wrench',
	role:'',
	children:[
		{ 	path: 'confCharts',
			name: 'Dashboards',
			component: confCharts,
			icon : 'speedometer',
			role:''
		}, { path: 'confUsers',
			name: 'Users',
			component: confUsers,
			icon : 'account-multiple',
			role:'admin'
		},{ path: 'confGroups',
			name: 'Devices',
			component: confGroups,
			role:'admin',
			icon : 'group'
		}
	]}
];
var main = { 
	path : '/main', 
	name : main,
	children: pages,
	props:true,
	component: {
		data (){
			return {
				navIsActive: false,
				isUserModal:false,
			}
		},props:['user'], created : function(){
			c('created main')
			addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
				vue.nav('/main/dash')
			});
		}, mounted () {
			Vue.component('userModal', userModal);
			// vue.$components.push(userModal);
		}, methods : {
			changePage (e) {
				vue.nav('/main/'+e);
				vue.$data.isLoader=true;
			}, toggleMenu: function () {
				this.navIsActive = !this.navIsActive
			},
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
				<div class="nav-item" v-for="rec in pages" v-if="rec.role==='' || rec.role===user.role">
					<button v-if="!rec.children" class="button is-dark is-fullwidth" @click.prevent="vue.nav('/main/'+rec.path)">
						<b-icon :icon="rec.icon"></b-icon><span>{{rec.name}}</span>
					</button>
					<b-dropdown v-else class="is-dark is-fullwidth">
						<div class="button is-dark" slot="trigger">
							<b-icon :icon="rec.icon"></b-icon>
							<span>{{rec.name}}</span>
							<b-icon icon="menu-down"></b-icon>
						</div>
						<b-dropdown-item class="button is-medium is-dark" v-for="c in rec.children" @click="vue.nav('/main/'+rec.path+'/'+c.path)"
						v-if="c.role==='' || c.role===user.role">
						<template>
							<b-icon :icon="c.icon"></b-icon><span>{{c.name}}</span>
						</template>
						</b-dropdown-item>
					</b-dropdown>
				</div>
			</div>
			<div class="navbar-end">
			{{user.username}}
				<button class="nav-item button is-dark is-fullwidth" @click="isUserModal = true"><b-icon icon="account"></b-icon></button>
				<button class="nav-item button is-dark is-fullwidth" @click="vue.logout"><b-icon icon="logout"></b-icon></button>
			</div>
		</div>
		</nav>
		<router-view></router-view>
		<b-modal :active.sync="isUserModal" has-modal-card >
            <userModal :user="user"></userModal>
        </b-modal>
	</div>`
	}
}