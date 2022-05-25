// responsible for character counter
$(function() {
	$("#tweet-text").on("input", function() {
		const char = $(this).val();
		const remainChar = 140 - char.length;

		$(this).siblings().children("#char-counter").text(remainChar).toggleClass("error", remainChar < 0);
	});
});
