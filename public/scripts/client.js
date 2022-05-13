/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// data - remove later when implement ajax get
const data = [
	{
		user: {
			name: "Newton",
			avatars: "https://i.imgur.com/73hZDYK.png",
			handle: "@SirIsaac"
		},
		content: {
			text: "If I have seen further it is by standing on the shoulders of giants"
		},
		created_at: 1652210070252
	},
	{
		user: {
			name: "Descartes",
			avatars: "https://i.imgur.com/nlhLi3I.png",
			handle: "@rd"
		},
		content: {
			text: "Je pense , donc je suis"
		},
		created_at: 1652296470252
	}
];

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
      <p>${new Date(tweetData.created_at)}</p>
      <div><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></div>
    </footer>
  </article>
  `;
};

renderTweets(data);

// form handling
$("form").submit(function(e) {
	e.preventDefault();

	const text = $(this).children("#tweet-text").serialize();

	// sending post req
	$.post("/tweets", text);

	// clear textarea
	$(this).children("#tweet-text").val("");
});
