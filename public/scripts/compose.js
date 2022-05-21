$(function() {
	// toggle form
	$("nav div").on("click", function() {
		if ($(".new-tweet").hasClass("hide")) {
			$(".new-tweet").slideUp(0, function() {
				// slideUp is specifically for the first time clicking so that .new-tweet will not POP up, but slide down
				$(this).removeClass("hide").slideDown("fast", function() {
					$("#tweet-text").focus();
				});
			});
		} else {
			$(".new-tweet").slideUp("fast", function() {
				$(this).addClass("hide");
			});
		}
	});

	// to-top-button is visible when window.scrollY > 400
	const scrollBtn = $(".container .to-top-btn");
	$(document).on("scroll", function() {
		window.scrollY < 400 ? $(scrollBtn).addClass("v-none") : $(scrollBtn).removeClass("v-none");
	});

	// scroll to the top of the page when clickend
	scrollBtn.on("click", function(e) {
		$("html").animate({ scrollTop: 0 }, "slow");
	});
});
