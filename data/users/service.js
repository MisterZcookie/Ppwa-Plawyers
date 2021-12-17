const jwt = require('jsonwebtoken');
const config = require('/Users/gilmoreira/Desktop/PPWA - TP/config/config')

function UserService(UserModel) {

    let service = {
        create,
        createToken,
        findAll,
        verifyToken,
        findUser
    };

    function create(values) {
        let newuser = UserModel(values);
        return save(newuser);
    }

    function save(model) {
        return new Promise(function (resolve, reject) {
            // do a thing, possibly async, then...
            model.save(function (err) {

                if (err) reject("There is a problema with register");
                resolve('User created!');
            });
        });
    }

    function createToken(user) {
        let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: config.expiresPassword
        });
        
            return  {user, token };
        
    

    }

    function findAll(page, limit, role) {
    
        return new Promise(function (resolve, reject) {
            UserModel.find({}, function (err, users) {
                if (err) reject(err);
                // object of all the users
                resolve(users);
            }).limit(limit * 1).skip((page - 1) * limit).sort({ name: 1 });
        });

    };

    function verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    reject();
                }
                return resolve(decoded);
            })
        })
    }

    function findUser({ name, password }) {
        return new Promise(function (resolve, reject) {
            UserModel.findOne({ name, password }, function (err, user) {
                if (err) reject(err);
                // object of all the users
                if (!user) {
                    reject("This data is wrong");
                }
                resolve(user);
            });
        });
    }


        return service;
    }

    module.exports = UserService;