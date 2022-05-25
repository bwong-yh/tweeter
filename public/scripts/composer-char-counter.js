// responsible for character counter
$(function() {
	$("#tweet-text").on("input", function() {
		const char = $(this).val();
		const remainChar = 140 - char.length;

		// set height to equal the scrollHeight to "wrap" text
		this.style.height = `${this.scrollHeight}px`;

		$(this).siblings().children("#char-counter").text(remainChar).toggleClass("error", remainChar < 0);
	});
});
