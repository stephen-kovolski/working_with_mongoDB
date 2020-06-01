const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000
const schools = require('./routes/schools')


    //middleware
    //all of my middleware will take in (req, res, next)
    //next() must be called in middleware so it knows to move on to the next piece of middleware in the cycle

const logger = (req, res, next) => {
    //The following line returns the 
    // 1) method
    // 2) if the request came from http or https
    // 3) gets the url at which the request is made
    // 4) Makes it possible to stroe the original url in case the user needs to be redirected back to it from another page.  Like a log in page.
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
}


    //mount routers.  THis allows me to not have to write out all of the nedpoints in the schools.js file.  I can condense it down to '/:id'  line 9 makes the prgoram assume the '/schools' is included before it adds the    '/:id"

app.use('/schools', schools)

    //makes the app listen on the port I have choosem.  The variable for PORT is located in teh env file to keep it private from the public. 

app.listen(PORT, console.log(`listening on port ${PORT}`)); 
