var exit = {
    created : function(){
		vue.loader(1);
	c('created exit');
		localStorage.removeItem('user');
		
    }, mounted : function () {
	c('mounted exit')
	vue.loader(0);
    }
};