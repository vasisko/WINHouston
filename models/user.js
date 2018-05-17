
var bcrypt = require('bcryptjs');
module.exports = function (sequelize, DataTypes) {



    //User Schema
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }

    });
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
    return User;
};

// // encrytion:  before password is sent to database, password is encrypted
// //  bcrypt sends user's password through hash function and adds extra characters=salt
// module.exports.createUser = function (newUser, callback) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(newUser.password, salt, function (err, hash) {
//             newUser.password = hash;
//             newUser.save(callback);
//         });

//     });
// };