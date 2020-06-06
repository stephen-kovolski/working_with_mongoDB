//below are the controlers of each api request.  Whatever the users decideds to do, the directions to complete the request are found in this file in the code below.



//Description - Get all schoools
//Route - GET request to /schools
//Acess - public

exports.schools = (req, res, next) => {
    res.status(200).json({text: "showing all schools"})

}



//Description - Get single schoool
//Route - GET request to /schools/:id
//Acess - public

exports.getSchool = (req, res, next) => {
    res.status(200).json({text: ''})

}




//Description - Create a new schoools
//Route - POST a new school to /schools
//Acess - private

exports.createSchool = (req, res, next) => {
    res.status(200).json({text: "create new school"})

}

//Description - Update a schoool
//Route - PUT to /schools:id
//Acess - private

exports.updateSchool = (req, res, next) => {
    res.status(200).json({text: `Update info on an existing school in the DB ${req.params.id}`});

}



//Description - Deete a schoool
//Route - DELETE a school at route /schools:id
//Acess - private

exports.deleteSchool = (req, res, next) => {
    res.status(200).json({text: `delete an existing school in the DB ${req.params.id}`});

}

