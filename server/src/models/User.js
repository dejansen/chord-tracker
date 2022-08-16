const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcryptjs'));

function  hashPassword(user) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) =>
{
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    },{
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            // beforeSave: hashPassword,
        }
    })

    User.prototype.comparePassword = function (password) {
        const test = bcrypt.compareAsync(password, this.password)
        console.log(password, this.password, test)
        return bcrypt
            .compareAsync(password, this.password)
            // .then(ok => {return ok})
    }
    return User
}
