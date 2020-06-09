const ErrorResponse = require('../utilities/errorResponse')
const errorHandler = (err, req, res, next) => {

    let error = { ...err}  //spread operator takes everything associated w/ err & assigns them to the error variable

    error.message = err.message;

    //log to the console for the developer
    //the err has a stack on it which will give us more information, error, file info, etc...
    console.log(err.stack.gray);


    //mongoose bad obj id
    if (err.name === 'CastError') {
        const message = `School not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404)
    }


    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'server error'
    });
}


module.exports = errorHandler; 