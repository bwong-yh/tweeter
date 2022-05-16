/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = (data) => {
	data.forEach((tweet) => {
		$("#tweets-container").append(createTweetElement(tweet));
	});
};

const createTweetElement = (tweetData) => {
	return `
  <article class="tweet">
    <header>
      <div>
        <img class="avatar" src="${tweetData.user.avatars}" alt="">
        <p>${tweetData.user.name}</p>
      </div>
      <p class="handle">${tweetData.user.handle}</p>
    </header>
    <p>${tweetData.content.text}</p>
    <footer>
      <p>${timeago.format(new Date(tweetData.created_at))}</p>
      <div><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></div>
    </footer>
  </article>
  `;
};

const loadTweets = () => {
	$.get("/tweets", (data) => renderTweets(data));
};

// calls loadTweets() & enables tweets posting when DOM is ready
// https://stackoverflow.com/questions/65941258/why-jquery-ready-has-strikethrough
$(function() {
	loadTweets();

	// handle new tweet form
	$("form").on("submit", function(e) {
		e.preventDefault();

		const tweet = $(this).children("#tweet-text").val();

		// make sure tweet is not "" or too long
		if (!tweet || $(this).find("#char-counter").hasClass("error")) {
			alert("Uh oh, Something's wrong!");
		} else {
			// send post req if valid
			$.post("/tweets", $(this).serialize());

			// clear textarea and reset counter
			$(this).children("#tweet-text").val("");
			$(this).find("#char-counter").removeClass("error").text("140");
		}
	});
});
