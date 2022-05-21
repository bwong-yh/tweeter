$(function() {
	// button is visible when window.scrollY > 400
	$(document).on("scroll", () => {
		$("nav").toggleClass("custom-nav", window.scrollY >= 400);
		$("nav div").toggleClass("custom-nav-div", window.scrollY >= 400);
		$("nav div p").toggleClass("custom-nav-div-p", window.scrollY >= 400);
	});
});
