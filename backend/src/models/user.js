const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    handle: {
      type: String,
      unique: true,
      required: true
    },
    profilPicture: String,
    email: {
      type: String,
      unique: true,
      required: true
    },
    bio: String,
    location: String,
    website: String,
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    followers: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    tweets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet"
    }],
    likedTweets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet"
    }],
  },
  { timestamps: true }
)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
