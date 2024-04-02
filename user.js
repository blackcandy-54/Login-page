const express = require('express');
const Router = express.Router();
const User = require("../model/userModel.js");

Router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    console.log(email, password)
    const user = await User.findOne({ email })
    console.log(user)

    if (user && user.password == password) {
       
         res.status(200).json("Successfully LoggedIn")

    } else {
        res.status(400).json("Invalid Credentials")
    }
});

module.exports = Router;