const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc - Register a User
//@route - POST / api/users/register
//@access public
const registerUser = asyncHandler (async (req , res) => {
    const { username , email , password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }

    const userAvaliable = await User.findOne( { email });
    if (userAvaliable) {
        res.status(400);
        throw new Error("User Already Registered");
    }

    
    res.json({ message : "Register The User "})
});

//@desc - Login User
//@route - POST / api/users/login
//@access public
const loginUser = asyncHandler (async (req , res) => {
    res.json({ message : "Login User"})
});

//@desc - Current User Info
//@route - GET / api/users/current
//@access PRIVATE
const currentUser = asyncHandler (async (req , res) => {
    res.json({ message : "Current User Information" })
});

module.exports = { registerUser , loginUser , currentUser};
