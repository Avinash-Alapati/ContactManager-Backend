const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc - Get all contacts
//@route - GET / api/contacts
//@access public
const getContact = asyncHandler (async (req , res) => {
    const contacts = await Contact.find();
    res.status(200).json({contacts});
    // res.status(200).json({message : "Get All Contacts"});
})

//@desc - Create new contacts
//@route - POST /api/contacts
//@access public
const createContact = asyncHandler (async (req , res) => {
    console.log("The request Body is: " , req.body);
    let {name , email , phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Mandatory!");
    }
    const contact = await Contact.create({
        name , email , phone
    });
    res.status(201).json(contact);
});

//@desc - Get contacts for id
//@route - GET / api/contacts/:id
//@access public
const getSingleContact = asyncHandler (async (req , res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact);
    // res.status(200).json({message : `Get Contact for ${req.params.id}`});
});

//@desc - update contact with id 
//@route - PUT / api/contacts/:id
//@access public
const updateContact = asyncHandler (async (req , res) => {
    const contact = await Contact.findById(req.params.id);
0.

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedContact);
});

//@desc - Delete contact with id 
//@route - DELETE / api/contacts/:id
//@access public
const deleteContact = asyncHandler (async (req , res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }

    await Contact.deleteOne(contact);
    res.status(200).json(contact);
});

module.exports = {
    getContact,
    createContact,
    getSingleContact,
    updateContact,
    deleteContact
};

