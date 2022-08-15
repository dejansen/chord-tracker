// const Sequelize = require('sequelize');
const {User} = require('../models')

// import User from '../models/User'
module.exports = {
    async register(req,res) {
        try {
            // console.log(model)
            // const User = model(Sequelize,Sequelize.DataTypes) 
            // console.log(req.body)
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch(err) {
            res.status(400).send({error: 'The email address already exists', message: err.message})
        }
    }
}