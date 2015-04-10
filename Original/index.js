$(document).ready(function () {
	
	$("#mobile-nav").addClass("js").before('<div class="icon-ham-menu"></div>');
	$(".icon-ham-menu").click(function(){
		$("#mobile-nav").slideToggle();
			$(this).toggleClass("js");
	
		});

	$(window).resize(function(){
		if(window.innerWidth > 790) {
			$("#mobile-nav").removeAttr("style");
		}

});
	});

// Jquery gets rid of .intro class styling for the Intro section - doesn't acknowledge the margins and padding?
// Possible to break menu toggle -- menu button stays yellow if user does not close menu (toggle menu back to grey) before resizing window
	// Need to write some sort of condition that says if menu is closed, go back to grey?