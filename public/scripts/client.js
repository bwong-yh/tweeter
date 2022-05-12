/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// data - remove later when implement ajax get
const tweetData = {
	user: {
		name: "Newton",
		avatars: "https://i.imgur.com/73hZDYK.png",
		handle: "@SirIsaac"
	},
	content: {
		text: "If I have seen further it is by standing on the shoulders of giants"
	},
	created_at: 1461116232227
};

const createTweetElement = (tweetData) => {
	return `
  <article class="tweet">
      <header>
        <div>
          <img class="avatar" src="${tweetData.user.avatars}" alt="">
          <p>${tweetData.user.name}</p>
        </div>
        <div>
          <p class="handle">${tweetData.user.handle}</p>
        </div>
      </header>
      <p>${tweetData.content.text}</p>
      <footer>
        <div>
          <p>${new Date(tweetData.created_at)}</p>
        </div>
        <div><i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></div>
      </footer>
    </article>
  `;
};
const tweet = createTweetElement(tweetData);

console.log(tweet);
$("#tweets-container").append(tweet);
