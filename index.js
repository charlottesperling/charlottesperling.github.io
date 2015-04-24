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

// Possible to break menu toggle -- menu button stays yellow if user does not close menu (toggle menu back to grey) before resizing window
	// Need to write some sort of condition that says if menu is closed, go back to grey?



//Hide header on scroll

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();
	// on scroll, let the interval function know the user has scrolled
	$(window).scroll(function(event){
		didScroll = true;

	});

		//The interval checks every 250ms if didScroll has changed. 
		//If it has, it runs the function and resets didScroll to false. 

	setInterval(function(){
		if(didScroll) {
			hasScrolled();
			didScroll = false;
		}

	}, 250);

		function hasScrolled(){

			//Store scroll position in a variable for easy access
			var st = $(this).scrollTop();

			//Check if scrolled more than delta
			if (Math.abs(lastScrollTop - st) <= delta)
				return;

			//Check if they scrolled past the header and if they scrolled up or down
			// If they scrolled down and are past the navbar, add class .nav-up.
    		// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight){

				//Scroll down
				$('header').removeClass('nav-down').addClass('nav-up');
			}

			else {

				//Scroll up
				if(st + $(window).height() < $(document).height()) {
					$('header').removeClass('nav-up').addClass('nav-down');

				}
			}

			lastScrollTop = st;

		}