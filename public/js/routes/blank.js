var blank = {
    created : function(){
	vue.$data.isLoader=true;
	c('created blank')
    }, mounted : function () {
	c('mounted balnk')
	vue.$data.isLoader=false;
    }, template :`<div></div>`
};