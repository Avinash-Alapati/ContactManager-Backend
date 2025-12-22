//@desc - Get all contacts
//@route - GET / api/contacts
//@access public

const getContact = (req , res) => {
    res.status(200).json({message : "Get All Contacts"});
}

//@desc - Create new contacts
//@route - POST / api/contacts
//@access public

const createContact =(req , res) => {
    console.log(` The request Body is ${req.body}`);
    res.status(201).json({message : "Create Contact"});
};

//@desc - Get contacts for id
//@route - GET / api/contacts/:id
//@access public

const getSingleContact =(req , res) => {
    res.status(200).json({message : `Get Contact for ${req.params.id}`});
}

//@desc - update contact with id 
//@route - PUT / api/contacts/:id
//@access public

const updateContact =(req , res) => {
    res.status(200).json({message : `Update Contact for ${req.params.id}`});
};

//@desc - Delete contact with id 
//@route - DELETE / api/contacts/:id
//@access public

const deleteContact =(req , res) => {
    res.status(200).json({message : `Delete Contact for ${req.params.id}`});
}

module.exports = {
    getContact,
    createContact,
    getSingleContact,
    updateContact,
    deleteContact
};

