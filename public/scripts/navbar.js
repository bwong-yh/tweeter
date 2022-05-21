$(function() {
	// button is visible when window.scrollY > 400
	$(document).on("scroll", () => {
		const windowY = Boolean(window.scrollY >= 200);

		$("nav").toggleClass("custom-nav", windowY);
		$("nav div").toggleClass("custom-nav-div", windowY);
		$("nav div p").toggleClass("custom-nav-div-p", windowY);
	});
});
