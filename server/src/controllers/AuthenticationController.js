// const Sequelize = require('sequelize');
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSingUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}

// import User from '../models/User'
module.exports = {
    async register(req,res) {
        try {
            // console.log(model)
            // const User = model(Sequelize,Sequelize.DataTypes) 
            // console.log(req.body)
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSingUser(userJson)

            })
        } catch(err) {
            res.status(400).send({error: 'The email address already exists', message: err.message})
        }
    },
    async login(req,res) {
        try {
            const {email, password} = req.body
            // console.log(model)
            // const User = model(Sequelize,Sequelize.DataTypes) 
            // console.log(req.body)
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                res.status(403).send({error: 'user :: The login information was incorrect'})
                return
            }

            

            const isPasswordValid = await user.comparePassword(password)
            console.log('ispasswordvalid ?',isPasswordValid)
            // const isPasswordValid = false;
            if (!isPasswordValid) {
                res.status(403).send({error: 'password :: The login information was incorrect'})
                return
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSingUser(userJson)

            })
        } catch(err) {
            res.status(500).send({error: 'An error has occurred trying to login', message: err.message})
        }
    }
}