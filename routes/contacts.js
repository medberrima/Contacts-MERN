const express = require('express');
const router = express.Router()  ;
const Contact = require('../models/Contact');
const controllers = require("../controllers/contact.conrollers");

//test routing
// router.get('/', (req, res) => 
//   res.send('Hello World!')
// )

//post contact
//get all contacts
//get contact by id
//delete contact by id
//update contact by id


//---- documentation swagger ----

// @Method get
// @desc post a contact
// @path : http://localhost:5000/api/contact
// Params Body
router.post("/",controllers.postContact);

// @Method get
// @desc Get all contact
// @path : http://localhost:5000/api/contact
router.get('/', controllers.GetAllContact)

// @Method get
// @desc Get contact by id
// @path : http://localhost:5000/api/contact/:id
// @params id
router.get('/:id',controllers.GetContactById)

// @Method delete
// @desc Delete contact by id
// @path : http://localhost:5000/api/contact/:id
// @params id
router.delete('/:id',controllers.deleteContact)

// @Method Put
// @desc update contact by id
// @path : http://localhost:5000/api/contact/:id
// @params id Body
router.put('/:id',controllers.updateContact)

module.exports = router ;

