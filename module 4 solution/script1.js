(function(){
	var names=["jilha","shiji","jose","jismi","chacko","cris"];
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