import crypto from 'crypto';
import Oauth from 'oauth-1.0a';
import 'dotenv/config'

// Create an OAuth 1.0a instance with consumer key and secret
const oauth = Oauth({
    consumer: {
        key: process.env.OAUTH_CONSUMER_KEY,
        secret: process.env.OAUTH_CONSUMER_SECRET
    },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});


export default oauth
