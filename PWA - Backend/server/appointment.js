const bodyParser = require('body-parser');
const express = require('express');
const Appointments = require('../data/appointments');



function AppointmentRouter() {
  const router = express();

  router.use(bodyParser.json({ limit: '100mb' }));
  router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));




  router.route('/appointments')


    .get(function (req, res, next) {
      const { page=1, limit=2}=req.query;
      console.log('Get all Appointments');
      Appointments.findAll(page, limit)
        .then((appointments) => {
          res.send("Lista de Reuniões <br><br>"+appointments);
          console.log(appointments)
        
        })
        .catch((err) => {
          next();
        });
    })
    .post(function (req, res, next) {
      console.log('Reunião Criada');
      let body = req.body;
      Appointments.create(body)
        .then(() => {
          console.log('Guardada');
          res.status(200);
          res.send(body);
        })
        .catch((err) => {
          console.log(err);
          err.status = err.status || 500;
          res.status(401);
          next();
        });
    });

  router.route('/appointments/:appointmentId')
    .get(function (req, res, next) {
      console.log('Get by Id');
      let appointmentId = req.params.appointmentId;

      Appointments.findById(appointmentId).then((appointment) => {
        res.status(200); res.send(appointment);
        console.log('ID:' + req.params.appointmentId)
        next();
      })
        .catch((err) => {
          res.status(404); next();
        });

    })

    .put(function (req, res, next) {
      let appointmentId = req.params.appointmentId;
      let body = req.body;

      console.log(body);

      Appointments.update(appointmentId, body)
        .then((appointment) => {
          res.status(200);
          res.send(appointment);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    })

        .delete(function (req, res, next) {
          console.log("Delete by Id");
          let appointmentId = req.params.appointmentId;
          Appointments.removeById(appointmentId)
            .then(() => {
              console.log('test'); res.status(208).Json; 
              next()
            })
                .catch((err) => {
                  console.log('err'); res.status(404); 
                  next;
                })
            })
      


      return router;


    };






  module.exports = AppointmentRouter;


