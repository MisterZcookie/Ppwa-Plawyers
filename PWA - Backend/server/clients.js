const bodyParser = require('body-parser');
const express = require('express');
const Clients = require('../data/clients');



function ClientRouter() {
  const router = express();

  router.use(bodyParser.json({ limit: '100mb' }));
  router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));




  router.route('/clients')
    .get(function (req, res, next) {
      const {page = 1, limit = 2 }= req.query;
      console.log('Get all Clients');
      Clients.findAll(page, limit)
        .then((clients) => {
          res.send("Lista de Clientes <br><br>"+clients);
          console.log(clients)

          next();
        })
        .catch((err) => {
          next();
        });
    })
    .post(function (req, res, next) {
      console.log('post');
      let body = req.body;
      Clients.create(body)
        .then(() => {
          console.log('Saved');
          res.status(200);
          res.send(body);
          next();
        })
        .catch((err) => {
          console.log(err);
          err.status = err.status || 500;
          res.status(401);
          next();
        });
    });

  router.route('/clients/:clientId')
    .get(function (req, res, next) {
      console.log('Get Clients by Id');
      let clientId = req.params.clientId;

      Clients.findById(clientId).then((client) => {
        res.status(200); res.send(client);
        console.log('Dados de Cliente com o ID:' + req.params.clientId)
        next();
      })
        .catch((err) => {
          res.status(404); next();
        });

    })

    .put(function (req, res, next) {
      let clientId = req.params.clientId;
      let body = req.body;

      console.log(body);

      Clients.update(clientId, body)
        .then((client) => {
          res.status(200);
          res.send(client);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    })

        .delete(function (req, res, next) {
          console.log("Delete by Id");
          let clientId = req.params.clientId;
          Clients.removeById(clientId)
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






  module.exports = ClientRouter;


