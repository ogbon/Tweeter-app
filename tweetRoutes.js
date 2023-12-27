import express from 'express'
import { createTweet } from './tweetControllers.js'

const tweets = express.Router()


tweets.post('/', createTweet)



export default tweets
