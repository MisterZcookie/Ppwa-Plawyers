function LawyerService(LawyerModel) {
    let service = {
        create,
        findAll,
        findById,
        update,
        removeById,
        countLawyers
    };

    function create(values) {
        let newLawyer = LawyerModel(values);
        return save(newLawyer);
    };

    function save(newLawyer) {
        return new Promise(function (resolve, reject) {
            // do a thing, possibly async, then...
            newLawyer.save(function (err) {
                if (err) reject(err);
                resolve('Lawyer created!');
            });
        });
    };

    function findAll(page, limit) {
        return new Promise(function (resolve, reject) {
            
            LawyerModel.find({}, function (err, users) {
                if (err) reject(err);
                resolve(users);
            }).limit(limit*1).skip((page-1)*limit).sort({name:1});
        });

    };

    function findById(id) {
        return new Promise(function (resolve, reject) {
            LawyerModel.findById(id, function (err, user) {
                if (err) reject(err);
                // object of all the users
                resolve(user);
            });
        });
    }

    function update(id, values) {
        return new Promise(function (resolve, reject) {
          LawyerModel.findByIdAndUpdate(id, values, function (err, user) {
            if (err) reject(err);
            resolve(user);
          });
        });
      }

    function removeById(id) {
        return new Promise(function (resolve, reject) {
            console.log(id);
            LawyerModel.findByIdAndRemove(id, function (err) {
                console.log(err);

                if (err) reject(err);

                resolve();
            })
        })
    }

    function countLawyers(){

    }







    return service;
}
module.exports = LawyerService;