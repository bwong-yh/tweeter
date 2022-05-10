// responsible for character counter
$(document).ready(function() {
	$("#tweet-text").keyup(function() {
		const char = $(this).val();
		const remainChar = 140 - char.length;

		$(this).siblings().children(".counter").text(remainChar).toggleClass("error", remainChar < 0);
	});
});
