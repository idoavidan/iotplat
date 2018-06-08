var confGroups = {
    created () {
	    vue.loader(1);
	    c('created confGroups')
    }, mounted  () {
	    c('mounted confGroups')
	    vue.loader(0);
    }, template :
	`divdiv class=appMenu
	divspan v-html=icon('package')spanlabelgroupslabeldiv
	divspan v-html=icon('device-mobile')spanlabeldeviceslabeldiv
	divspan v-html=icon('pulse')spanlabelsensorslabeldiv	
	select id=selectGroup onchange=changeGroup(this.value)option selected valueoptionselect
        select id=selectDevice onchange=changeDevice(this.value)option selected valueoptionselect
        select id=selectSensor onchange=changeSensor(this.value)option selected valueoptionselect
	div`
};