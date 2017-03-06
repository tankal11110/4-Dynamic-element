$(document).ready(function(){

	var btn = $("#button");
	var ul = $("ul");
	
	btn.on('click', function(e){
		e.preventDefault();
		console.log('ok');
		var txt = $('input[type="text"]').val();
		console.log(txt);
		if (txt.length!=0){
			var li = $('<li>'+txt+'</li>');
			ul.append(li);
			$('input[type="text"]').val("");
		}
	});

});