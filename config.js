var config = {
    "production": {
        "facebook": {
            clientID: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: 'https://idontknow.com/auth/facebook/return',
            profileFields: ['id', 'displayName', 'link', 'picture', 'emails', 'name']
        },
        mongodb: process.env.MONGO_URI
    },
    'development': {
        facebook: {
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: 'http://localhost:3000/auth/facebook/return',
            profileFields: ['id', 'displayName', 'link', 'picture', 'emails', 'name']
        },
        mongodb: 'mongodb://localhost/hackernews'
    }
};

module.exports = config[process.env.NODE_ENV];
