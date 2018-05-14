var bcrypt = require('bcryptjs');
module.exports = function(sequelize, DataTypes) {
    


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
return User;
};

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });

});
};