(function(){
	var names=["Yaakov","john","jen","jason","paul","frank","larry","paula","laura","jim"];
	for(var i=0;i<names.length;i++){
		var firstletter=names[i].charAt(0).toLowerCase();
		if(firstletter==='j'){
			byespeaker(names[i]);
		}
		else{
			hellospeaker(names[i]);
		}
	}
})();
