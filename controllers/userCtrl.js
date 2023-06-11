const User = require('../models/userModel');

exports.createUser = async (req, res, next) => {
    try{
        const {
            email,
            password,
            name
        } = req.body;

        const user = await User.create({
            email,
            password,
            name
        });

        if(!user){
            const err = new Error('user cannot create!');
            throw err;
        }

        res.status(201).json({
            message: 'success',
            user: user
        });

    }catch(err){
        next(err);
    }
}

exports.getAllUser = async (req, res, next) => {
    try{
        const user = await User.find();
        if(!user){
            const err = new Error('there is no user');
            throw err;
        } 
        
        res.status(200).json({
            message: 'success',
            user: user
        });

    }catch(err){
        next(err);
    }
}