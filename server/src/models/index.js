const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {

}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,

)

fs
    .readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
        // require(path.join(__dirname, file));
        console.log('file to include',path.join(__dirname, file))
        // const model = sequelize.define(path.join(__dirname,file))
        const model = require(path.join(__dirname, file))(sequelize,Sequelize.DataTypes)
        // model(sequelize, Sequelize.DataTypes)
        console.log("model",model)
        const name = file.split('.')[0]
        db[name] = model
    })
console.log("dbobj",db)
db.sequelize = sequelize
db.Sequelize = Sequelize




module.exports = db