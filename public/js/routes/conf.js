var conf = {
    created (){
		vue.loader(1);
		c('created conf')
    }, mounted () {
	    c('mounted conf')
	    vue.loader(0);
    }, template : `<div>Configuration<div>`
};