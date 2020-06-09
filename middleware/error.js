const ErrorResponse = require('../utilities/errorResponse')
const errorHandler = (err, req, res, next) => {

    let error = { ...err}  //spread operator takes everything associated w/ err & assigns them to the error variable

    error.message = err.message;

    //log to the console for the developer
    //the err has a stack on it which will give us more information, error, file info, etc...
    console.log(err);


    //mongoose bad obj id
    if (err.name === 'CastError') {
        const message = `School not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    //Mongoose duplicate test.  Im getting the code from th err object - err.code.  Its a unique number to catch. If this code coes up or this error it will display the message below
    if (err.code === 11000) {
        const message = 'Duplicate field entered';
        error = new ErrorResponse(message, 400)
    }

    //Mongoose validation test
    if(err.name === 'validationError'){
        const message = Object.value(err.errors).map(val => val._message);  
        error = new ErrorResponse(message, 400);
    }





    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'server error'
    });
}


module.exports = errorHandler;  