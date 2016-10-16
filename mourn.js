(function($) {	 
  	$.mourn = function(options) {  		
  		var settings = $.extend({
            ribbon: true,
            ribbonPosition: 'top-right',
            gray: true,
            grayscale:0.9
      }, options);
      
      // set gray scale
      if(settings.gray){
        grayscale = settings.grayscale*100+'%'; 
        var styles = {
         'filter' : 'gray',
          'filter': 'grayscale('+grayscale+')',
          '-moz-filter': 'grayscale('+grayscale+')',
          '-webkit-filter': 'grayscale('+grayscale+')'
        };        
        $('html').css(styles);        
      }
      
      if(settings.ribbonPosition=='top-right'){
        // setting css
      }else if(settings.ribbonPosition=='top-left'){
      	
      }else if(settings.ribbonPosition=='bottom-right'){

      }else if(settings.ribbonPosition=='bottom-left'){

      }
  	};  	
}(jQuery));