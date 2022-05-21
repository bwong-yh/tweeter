$(function() {
	// button is visible when window.scrollY > 400
	const scrollBtn = $(".container .to-top-btn");
	$(document).on("scroll", function() {
		window.scrollY < 400 ? $(scrollBtn).addClass("v-none") : $(scrollBtn).removeClass("v-none");
	});

	// scroll to the top of the page when clickend
	scrollBtn.on("click", function(e) {
		$("html").animate({ scrollTop: 0 }, "slow");
	});
});
