// responsible for character counter
$(document).ready(function() {
	$(".new-tweet").keyup(function() {
		const char = $("#tweet-text").val();
		const remainChar = 140 - char.length;

		$(".counter").text(remainChar);
	});
});
