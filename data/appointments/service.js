function AppointmentService(AppointmentModel) {
    let service = {
        create,
        save,
        findAll,
        findById,
        update,
        removeById
    };

    function create(values) {
        let newAppointment = AppointmentModel(values);
        return save(newAppointment);
    };

    function save(newAppointment) {
        return new Promise(function (resolve, reject) {
            // do a thing, possibly async, then...
            newAppointment.save(function (err) {
                if (err) reject(err);
                resolve('Appointment created!');
            });
        });
    };

    function findAll(page, limit) {
        return new Promise(function (resolve, reject) {
            AppointmentModel.find({}, function (err, users) {
                if (err) reject(err);
                // object of all the users
                resolve(users);
            }).limit(limit*1).skip((page-1)*limit).sort({date:1});
        });

    };

    function findById(id) {
        return new Promise(function (resolve, reject) {
            AppointmentModel.findById(id, function (err, user) {
                if (err) reject(err);
                // object of all the users
                resolve(user);
            });
        });
    }

    function update(id, values) {
        return new Promise(function (resolve, reject) {
          AppointmentModel.findByIdAndUpdate(id, values, function (err, user) {
            if (err) reject(err);
            resolve(user);
          });
        });
      }

    function removeById(id) {
        return new Promise(function (resolve, reject) {
            console.log(id);
            AppointmentModel.findByIdAndRemove(id, function (err) {
                console.log(err);

                if (err) reject(err);

                resolve();
            })
        })
    }







    return service;
}
module.exports = AppointmentService;