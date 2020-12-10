class User {
    profilPicture = '';
    bio = '';
    location = '';
    website = '';
    createdAt = '';
    following = [];
    followers = [];
    tweets = [];
    likedTweets = [];

    follow(user){
        this.following.push(user);
        user.followers.push(this);
    }
    
    tweet(tweet){
        this.tweets.push(tweet);
    }
    
    retweet(originalTweet, body = ''){
        var retweet = new Tweet(body, this);
        retweet.originalTweet = originalTweet;
        this.tweets.push(retweet);
        originalTweet.retweets.push(retweet);
    }

    like(tweet){
        this.likedTweets.push(tweet);
        tweet.likes.push(this);
    }

    constructor(name, handle, email){
        this.name = name;
        this.handle = handle;
        this.email = email;
    }
}

class Tweet {
    createdAt = new Date();
    replies= [];
    likes = [];
    retweets = [];
    originalTweet = null;
    attachments = []

    constructor(body, author){
        this.body = body;
        this.author = author;
    }
}

const mertklang = new User(
    'Mert Koçak', 
    'mertklang', 
    'mertfor4_dev@outlook.com'
    )


const KaanTurambar = new User(
    'Kaan Turambar', 
    'KaanTurambar', 
    'kaan@survivor.com'
    )

console.log(mertklang, KaanTurambar)

const tweet = new Tweet("Hello everyone this is mertklang", mertklang);
mertklang.tweet(tweet);
KaanTurambar.retweet(tweet);

