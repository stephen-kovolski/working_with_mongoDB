const NodeGeocoder = require('node-geocoder');

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpdapter: 'https',
    apiKey: process.env.MQKEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);


module.exports = geocoder;