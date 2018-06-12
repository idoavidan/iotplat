var exit = {
    created (){
		vue.loader(1);
	c('created exit');
		localStorage.removeItem('user');
		vue.nav('/');
    }, mounted () {
		c('mounted exit')
		vue.loader(0);
    }
};