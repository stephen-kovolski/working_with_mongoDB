

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;
const schools = require('./routes/schools');
const connectDB = require('./db');
const colors = require('colors');
dotenv.config({ path: './.env'});
const server = app.listen(PORT, console.log(`listening on port ${PORT}`.magenta.bold)); 



connectDB();

    // custom middleware that is now being handled by the moragan dependancy
//const logger = require('./middleware/logger');


    //middleware
    //all of my middleware will take in (req, res, next)
    //next() must be called in middleware so it knows to move on to the next piece of middleware in the cycle




    
//app.use(logger);

    //mount routers.  THis allows me to not have to write out all of the nedpoints in the schools.js file.  I can condense it down to '/:id'  line 9 makes the prgoram assume the '/schools' is included before it adds the    '/:id"

app.use('/schools', schools)

//Here I am going to handle the unhandled promise rejections.  If I get any errors I want the server to close.
process.on('unHandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.italic);

    //below closes the server
    server.close(() => process.exit(1))
    
})
