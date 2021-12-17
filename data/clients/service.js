function ClientService(ClientModel) {
    let service = {
        create,
        findAll,
        findById,
        update,
        removeById
    };

    function create(values) {
        let newClient = ClientModel(values);
        return save(newClient);
    };

    function save(newClient) {
        return new Promise(function (resolve, reject) {
            // do a thing, possibly async, then...
            newClient.save(function (err) {
                if (err) reject(err);
                resolve('Client created!');
            });
        });
    };

    function findAll(page, limit) {
        return new Promise(function (resolve, reject) {
            ClientModel.find({}, function (err, users) {
                if (err) reject(err);
                // object of all the users
                resolve(users);
            }).limit(limit*1).skip((page-1)*limit);
        });

    };

    function findById(id) {
        return new Promise(function (resolve, reject) {
            ClientModel.findById(id, function (err, user) {
                if (err) reject(err);
                // object of all the users
                resolve(user);
            });
        });
    }

    function update(id, values) {
        return new Promise(function (resolve, reject) {
          ClientModel.findByIdAndUpdate(id, values, function (err, user) {
            if (err) reject(err);
            resolve(user);
          });
        });
      }

    function removeById(id) {
        return new Promise(function (resolve, reject) {
            console.log(id);
            ClientModel.findByIdAndRemove(id, function (err) {
                console.log(err);

                if (err) reject(err);

                resolve();
            })
        })
    }







    return service;
}
module.exports = ClientService;