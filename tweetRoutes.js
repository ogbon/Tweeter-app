import express from 'express'
import { createTweet, getUser } from './tweetControllers.js'

const tweets = express.Router()


tweets.post('/', createTweet)

tweets.get('/', getUser)


export default tweets
