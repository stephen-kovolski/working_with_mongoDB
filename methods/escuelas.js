//below are the controlers of each api request.  Whatever the users decideds to do, the directions to complete the request are found in this file in the code below.
const ErrorResponse = require('../utilities/errorResponse')
const Schools = require('../models/Schools')

//Description - Get all schoools
//Route - GET request to /schools
//Acess - public

exports.schools = async (req, res, next) => {

    try {
        const schools = await Schools.find();

        res.status(200).json({success: true, count: schools.length, data: schools})
    } catch (err) {
        next(err)
    }

};






//Description - Get single schoool
//Route - GET request to /schools/:id
//Acess - public

exports.getSchoolById = async (req, res, next) => {

    try {
        const school = await Schools.findById(req.params.id);
            if (!school) {
              return next(new ErrorResponse(`School not found with id of ${req.params.id}`, 404)); 

            }
        res.status(200).json({success: true, data: school})
    } catch (err) {
        next(err)

    }

}

    



//Description - Create a new schoools
//Route - POST a new school to /schools
//Acess - private

exports.createSchool = async (req, res, next) => {
    try{
    const schools = await Schools.create(req.body);


    res.send(201).json({
        success: true,
        data: schools
    });
    } catch (err) {
        next(err)
    }   
    
}

//Description - Update a schoool
//Route - PUT to /schools:id
//Acess - private

exports.updateSchool = async (req, res, next) => {

    try {

        const school = await Schools.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
    
        if (!school) {
            return next(new ErrorResponse(`School not found with id of ${req.params.id}`, 404)); 

        }
            res.status(200).json({ success: true, data: school})        
        
    } catch (err) {
        next(err)
    }

    
}




//Description - Deete a schoool
//Route - DELETE a school at route /schools:id
//Acess - private

exports.deleteSchool =  async (req, res, next) => {

    try {

        const school = await Schools.findByIdAndDelete(req.params.id)
    
        if (!school) {
            return next(new ErrorResponse(`School not found with id of ${req.params.id}`, 404)); 
        }
            res.status(200).json({ success: true, data: {}})        
        
    } catch (err) {
        next(err)
    }
}

