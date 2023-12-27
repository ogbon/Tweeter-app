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


// GET User
export const getUser = async (req,res) => {
  const token = {
      key: process.env.ACCESS_TOKEN,
      secret: process.env.ACCESS_TOKEN_SECRET
  }

    const url = 'https://api.twitter.com/2/users/me';

    const headers = oauth.toHeader(oauth.authorize({
        url,
        method: 'GET'
    }, token));

    try {
        
        const result = await got.get(url, {
          responseType: 'json',
          headers: {
            Authorization: headers["Authorization"],
            'user-agent': "v2CreateTweetJS",
            'content-type': "application/json",
            'accept': "application/json"
          }
        });
        if (result.body) {
          res.status(200).send({data: result.body.data})
          
        } else {
          throw new Error('Unsuccessful request');
        }
    } catch (error) {
        res.status(422).send({data: null, message: 'Unable to process your request'})
    }
}


// DELETE TWEET
  export const deleteTweet = async (req, res) => {
    
    const { id } = req.params
    
    const token = {
        key: process.env.ACCESS_TOKEN,
        secret: process.env.ACCESS_TOKEN_SECRET
    }

    const url = `https://api.twitter.com/2/tweets/${id}`;

    const headers = oauth.toHeader(oauth.authorize({
        url,
        method: 'DELETE'
    }, token));

    try {
        
        const result = await got.delete(url, {
          responseType: 'json',
          headers: {
            Authorization: headers["Authorization"],
            'user-agent': "v2CreateTweetJS",
            'content-type': "application/json",
            'accept': "application/json"
          }
        });
        if (result.body) {
          
          res.status(202).send({data: result.body.data})
        } else {
          throw new Error('Unsuccessful request');
        }
    } catch (error) {
      
        res.status(422).send({data: null, message: 'Unable to process your request'})
    }
}
