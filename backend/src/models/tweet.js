const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const tweetSchema = new mongoose.Schema(
  {
   author: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       autopopulate: { select: 'handle'},
       required: true
   },
   body: {
       type: String,
       required: true
   },
   replies: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tweet",
       autopopulate: { select: 'handle'}
   }],
   likes: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       autopopulate: { select: 'handle'},
   }],
   retweets: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tweet"
   }],
   originalTweet: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Tweet",
       autopopulate: { maxDepth: 1},
   },
   attachments: []
  },
  { timestamps: true }
)

tweetSchema.plugin(autopopulate)

module.exports = mongoose.model('Tweet', tweetSchema)