(function($) {	 
  	$.mourn = function(options) {  		
  		var settings = $.extend({
            ribbon: true,
            ribbonPosition: 'top-right'
        }, options);
  		console.log(settings);
  		return 'test';
  	};  	
}(jQuery));