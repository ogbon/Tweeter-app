import got from 'got';
import 'dotenv/config'
import oauth from './authTool.js'



// SEND TWEET
export const createTweet = async (req,res) => {

    const token = {
        key: process.env.ACCESS_TOKEN,
        secret: process.env.ACCESS_TOKEN_SECRET
    }

    const url = 'https://api.twitter.com/2/tweets';

    const headers = oauth.toHeader(oauth.authorize({
        url,
        method: 'POST'
    }, token));

    try {
        
        const result = await got.post(url, {
          json: {'text':req.body.tweet},
          responseType: 'json',
          headers: {
            Authorization: headers["Authorization"],
            'user-agent': "v2CreateTweetJS",
            'content-type': "application/json",
            'accept': "application/json"
          }
        });
        if (result.body) {

          res.status(201).send({data: result.body.data})
        } else {
          throw new Error('Unsuccessful request');
        }
    } catch (error) {
        res.status(422).send({data: null, message: 'Unable to process your request'})
    }
}
