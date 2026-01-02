const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc - Get all contacts
//@route - GET / api/contacts
//@access Private
const getContact = asyncHandler (async (req , res) => {
    const contacts = await Contact.find( { user_id : req.user.id });
    res.status(200).json({contacts});
    // res.status(200).json({message : "Get All Contacts"});
})

//@desc - Create new contacts
//@route - POST /api/contacts
//@access Private
const createContact = asyncHandler (async (req , res) => {
    console.log("The request Body is: " , req.body);
    let {name , email , phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Mandatory!");
    }
    const contact = await Contact.create({
        name,
        email,
        phone, 
        user_id : req.user.id
    });
    res.status(201).json(contact);
});

//@desc - Get contacts for id
//@route - GET / api/contacts/:id
//@access Private
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
//@access Private
const updateContact = asyncHandler (async (req , res) => {
    const contact = await Contact.findById(req.params.id);
0.

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("This user doesn't has the permission to update another User");
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
//@access Private
const deleteContact = asyncHandler (async (req , res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("This user doesn't has the permission to Delete another User");
    }

    await Contact.deleteOne({ _id : req.params.id });
    res.status(200).json(contact);
});

module.exports = {
    getContact,
    createContact,
    getSingleContact,
    updateContact,
    deleteContact
};

