const express = require('express');
const router = express.Router()
const { 
    schools, 
    getSchool, 
    createSchool, 
    updateSchool, 
    deleteSchool } = require('../methods/escuelas');

router.route('/').get(schools).post(createSchool)
//below is to point toward the endpoint where the id is required
router.route('/:id')
    .get(getSchool)
    .put(updateSchool)
    .delete(deleteSchool)

module.exports = router; 