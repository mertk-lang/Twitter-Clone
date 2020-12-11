Title: Tweet

class User {
    profilPicture = "";
    bio = "";
    location = "";
    website = "";
    createdAt = new Date();
    following = [];
    followers = [];
    tweets = [];
    likedTweets = [];
    

    follow(user) {
        this.following.push(User);
        user.followers.push(this);
    }
        
    tweet(tweet) {
        this.tweets.push(tweet);
    }
    
    retweet(originalTweet, body = "") {
        const retweet = new Tweet(body, this);
        retweet.originalTweet = originalTweet;
        this.tweets.push(retweet);
        originalTweet.retweets.push(retweet);
    }

    like(tweet) {
        this.likedTweets.push(tweet);
        tweet.likes.push(this);
    }

    constructor(name, handle, email) {
        this.name = name;
        this.handle = handle;
        this.email = email;      
    }
}

class Tweet {
    createdAt = new Date();
    body = "";
    replies = [];
    likes = [];
    retweets = [];
    originalTweet = null;
    attachments = [];

    constructor(body, author) {
        this.author = author;
        this.body = body;
    }
}

const rainyroute = new User("Mert Koçak", "rainyroute", "mertfor4_dev@outlook.com");
const KaanTurambar = new User("Kaan Turambar", "KaanTurambar", "kaan_34@hotmail.com")

const Tweet1 = new Tweet("Hello", rainyroute)
rainyroute.tweet(Tweet);
KaanTurambar.retweet(Tweet1);

console.log(rainyroute, KaanTurambar);