const {Songs} = require('../models')

// import Somgs from '../models/Songs'
module.exports = {
    async index(req,res) {
        try {
            const songs = await Songs.findAll({
                limit: 10
            })
            res.send(songs)
        } catch(err) {
            res.status(500).send({error: 'An error has occurred trying to fetch the songs', message: err.message})
        }
    },
    async post(req,res) {
        try {
            const song = await Songs.create(req.body)
            res.send(song)
        } catch(err) {
            console.log(req.body)
            res.status(500).send({error: 'An error has occurred trying to create the song', message: err.message})
        }
    }
}