var blank = {
    created : function(){
	vue.loader(1);
	c('created blank')
    }, mounted : function () {
	c('mounted balnk')
	vue.loader(0);
    }, template :`<div></div>`
};