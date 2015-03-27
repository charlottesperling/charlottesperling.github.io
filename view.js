$( document ).ready(main);
	    $(function(){
	    	var pull = $("#pull");
	    		menu = $("#pages");
	    		menuHeight = menu.height();

	    	$(pull).on("click",function(e){
	    		e.preventDefault();
	    		menu.slideToggle();


	    	}); 

	    $(window).resize(function(){
	    	var w = $(window).width();
	    		if w > 790 && menu.is(":hidden")) {

	    			menu.removeAttr("style");
	    }


	    });


});