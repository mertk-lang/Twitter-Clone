const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const tweetSchema = new mongoose.Schema(
  {
   author: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
   },
   body: {
       type: String,
       required: true
   },
   replies: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tweet"
   }],
   likes: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
   }],
   retweets: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tweet"
   }],
   originalTweet: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tweet"
   },
   attachments: []
  },
  { timestamps: true }
)

tweetSchema.plugin(autopopulate)

module.exports = mongoose.model('Tweet', tweetSchema)