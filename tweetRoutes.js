import express from 'express'
import { createTweet, getUser, deleteTweet } from './tweetControllers.js'

const tweets = express.Router()


tweets.post('/', createTweet)

tweets.get('/', getUser)

tweets.delete('/:id', deleteTweet)


export default tweets
