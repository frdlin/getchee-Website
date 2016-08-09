/*-------------------------------------------------------------------------------
	jQuery Random Content Generator - Powered by Chuck Norris
	Version 1.0
	By Jon Cazier
	jon@3nhanced.com
	10.23.08
-------------------------------------------------------------------------------*/

$.fn.randomContent = function(options){
	
	var defaults = {
		xmlPath: "quotes.xml",
		nodeName: "quote"
	};
	 
	
	var options = $.extend(defaults, options);
	var quotes = new Array();
	
	var rc = this;

	$.get(defaults.xmlPath, {}, function(xml){
		$(defaults.nodeName,xml).each(function(i) {
			name = $(this).find("name").text()
			position = $(this).find("position").text()
			msg = $(this).find("message").text()
			quote = new Array(name, position, msg);
			quotes.push(quote);
		});
	
	
		getRandom = function() {
			var num = quotes.length
			var randNum = Math.floor(Math.random()*num);
			var content = "";
			for(x in quotes){
				if(x==randNum){
					content = quotes[x];
				}
			};
			display = "<blockquote>"+content[2]+"</blockquote><p><strong>"+content[0]+"</strong>, "+content[1]+"</p>";
			return display;
		}
		
		rc.each(function(){
			$(this).append(getRandom());
		});
	});
};