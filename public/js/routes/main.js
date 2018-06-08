var pages = [
	{ path: 'dash',
    name: 'dashboard',
	component: dash ,
    logo : icon('dashboard')
    },
    { path: 'confCharts',
    name: 'Charts',
    component: confCharts,
    logo : icon('graph')
    },
    { path: 'confUsers',
    name: 'Users',
    component: confUsers,
    logo : icon('organization')
    },
    { path: 'confGroups',
    name: 'Groups',
    component: confGroups,
    logo : icon('package')
    },
    { path: 'test',
    name: 'blank0',
    logo :''
    },
    { path: 'blank',
    name: 'blank1',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank2',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank3',
    component: blank,
    logo :''
    },
    { path: 'blank',
    name: 'blank4',
    component: blank,
    logo :''
    },
    { path: 'conf',
    name: 'conf',
    component: conf,
    logo : icon('tools')
    },
    { path: 'user',
    name: 'user',
    component: user,
    logo : icon('person')
    },
    { path: 'exit',
    name: 'exit',
    component: exit,
    logo : icon('sign-out')
    }
];
var main = { 
	path : '/main', 
	name : main,
	children: pages,
	component: {
		data (){
			return {
				isActive: true,
				hasError: false
			}
		}, created : function(){
			c('created main')
			addScript({"path":"./js/moment.min.js","name":"moment.min.js"},function(){
				vue.nav('/main/confUsers')
			});
		}, mounted : function () {
		}, methods : {
		changePage : function (e) {
			vue.nav('/main/'+e);
		}
		}, template :
		`<div><div id="loader" class="lds-dual-ring centered"></div>
			<modAlert v-if="vue.$data.showAlert" @close="vue.$data.showAlert = false">
			<h3 id="modAlert" slot="header">{{vue.$data.showAlert}}</h3>
			</modAlert>
			<modal v-if="vue.$data.showModal" @close="vue.$data.showModal = false">
			<h3 id="modModal" slot="header">{{vue.$data.showModal}}</h3>
			</modal>
			 <div name="bar"><div class="appMenu menubar" role="navigation"> <router-link v-for="rec in pages" :to="{ name: rec.name }"><span v-html="rec.logo"></span></a> </li></div></div>
			<router-view></router-view>
		</div>`
	}
}