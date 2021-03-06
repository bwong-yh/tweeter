/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Mics. Functions
const displayErrorMessage = errMessage => {
	$(".error-message span").text(errMessage);
	$(".new-tweet aside").slideDown("300", function() {
		setTimeout(() => {
			$(this).slideUp("300");
		}, 3500);
	});
};

const escapeText = str => {
	const div = document.createElement("div");
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
};

// Tweets Functions
const createTweetElement = tweetData => {
	return `
  <article class="tweet">
    <header>
      <div>
        <img class="avatar" src="${tweetData.user.avatars}" alt="">
        <p>${tweetData.user.name}</p>
      </div>
      <p class="handle">${tweetData.user.handle}</p>
    </header>
    <p>${escapeText(tweetData.content.text)}</p>
    <footer>
      <p id="post-time">${timeago.format(new Date(tweetData.created_at))}</p>
      <div><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></div>
    </footer>
  </article>
  `;
};

const renderTweets = data => {
	data.forEach(tweet => {
		$(".tweets-container").append(createTweetElement(tweet));
	});
};

const loadTweets = () => {
	$.get("/tweets", data => renderTweets(data));
};

const loadNewTweet = () => {
	$.get("/tweets", data => {
		// grab the newest tweet from db and append to #tweet-container
		$(".tweets-container").append(createTweetElement(data[data.length - 1]));

		// update previous tweets' post time (10 sec. difference between the most two tweets)
		$(".tweet #post-time").each(function(index) {
			$(this).text(`${timeago.format(new Date(data[index].created_at))}`);
		});
	});
};

const writeNewTweet = () => {
	// handle new tweet form
	$("form").on("submit", function(e) {
		e.preventDefault();

		const tweet = $(this).children("#tweet-text").val();

		// make sure tweet is not "" or too long
		if (!tweet) {
			displayErrorMessage("Nothing is entered, what's the message?");
		} else if ($(this).find("#char-counter").hasClass("error")) {
			displayErrorMessage("Message is too long, please shorten it to 140 characters.");
		} else {
			// remove err message if no errors
			$(".new-tweet aside").css("display", "none");
			// send post req if valid & add tweet to #tweet-container
			$.post("/tweets", $(this).serialize()).done(() => {
				loadNewTweet();
			});

			// clear textarea and reset counter
			$(this).children("#tweet-text").val("");
			$(this).find("#char-counter").removeClass("error").text("140");
		}
	});
};

// enables all functions when DOM is ready
// https://stackoverflow.com/questions/65941258/why-jquery-ready-has-strikethrough
$(function() {
	loadTweets();
	writeNewTweet();
});
