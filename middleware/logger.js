const logger = (req, res, next) => {
    //The following line returns the 
    // 1) method
    // 2) if the request came from http or https
    // 3) gets the url at which the request is made
    // 4) Makes it possible to stroe the original url in case the user needs to be redirected back to it from another page.  Like a log in page.
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)

    next();

};

module.exports = logger;

