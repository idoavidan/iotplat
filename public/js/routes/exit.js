var exit = {
    created : function(){
	vue.loader(1);
	c('created exit');
	router.push('/');
    }, mounted : function () {
	c('mounted exit')
	vue.loader(0);
    }, template :`<div>exit</div>`
};
var pages = [
    { path: 'dash',
    name: 'dashboard',
	component : dash,
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
    { path: 'blank',
    name: 'blank0',
    component: blank,
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