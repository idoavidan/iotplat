var conf = {
    created (){
		vue.$data.isLoader=true;
		c('created conf')
    }, mounted () {
	    c('mounted conf')
	    vue.$data.isLoader=false;
    }, template : `<div><router-view></router-view><div>`
};