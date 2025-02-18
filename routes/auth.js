const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

//sign up
router.post("/signup", async(req,res)=>{
    const { username, email, password } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });

    }catch(err){
        res.status(400).json({ message: 'Error creating user' });

    }
});
module.exports = router;