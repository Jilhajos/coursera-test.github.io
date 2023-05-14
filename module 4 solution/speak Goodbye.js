(function(window){
	var speakword ="Goodbye ";
	var byespeaker =function(name){
		console.log(speakword+""+name);
	}
	window.byespeaker=byespeaker;
})(window);