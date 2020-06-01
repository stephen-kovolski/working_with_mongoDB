
//Description - Get all schoools
//Route - GET request to /schools
//Acess - public

exports.schools = (req, res, next) => {
    res.status(200).json({text: "showing all schools"})
    res.send("home route")

}



//Description - Get single schoool
//Route - GET request to /schools/:id
//Acess - public

exports.getSchool = (req, res, next) => {
    res.status(200).json({text: ''})
    res.send("enter id for the school you are looking for")

}




//Description - Create a new schoools
//Route - POST a new school to /schools
//Acess - private

exports.createSchool = (req, res, next) => {
    res.status(200).json({text: "create new school"})
    res.send("adding a new school")

}

//Description - Update a schoool
//Route - PUT to /schools:id
//Acess - private

exports.updateSchool = (req, res, next) => {
    res.status(200).json({text: `Update info on an existing school in the DB ${req.params.id}`});
    res.send("update school info")

}



//Description - Deete a schoool
//Route - DELETE a school at route /schools:id
//Acess - private

exports.deleteSchool = (req, res, next) => {
    res.status(200).json({text: `delete an existing school in the DB ${req.params.id}`});
    res.send("update school info")

}

