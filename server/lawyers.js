const bodyParser = require('body-parser');
const express = require('express');
const Lawyers = require('../data/lawyers');




function LawyerRouter() {
  const router = express();
  

  router.use(bodyParser.json({ limit: '100mb' }));
  router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));



  router.route('/lawyers')


    .get(function (req, res, next) {
      const { page=1, limit=2}=req.query;
      console.log('Get all Lawyers');
      Lawyers.findAll(page, limit)
      .then((lawyers) => {
        console.log(lawyers);
        res.send("Lista de Advogados <br><br>"+ lawyers);
        
        
      })
      .catch((err) => {
        next();
      });
      
      
        
    })
    .post(function (req, res, next) {
      console.log('post');
      let body = req.body;
      Lawyers.create(body)
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

  router.route('/lawyers/:lawyerId')
    .get(function (req, res, next) {
      console.log('Get by Id');
      let lawyerId = req.params.lawyerId;

      Lawyers.findById(lawyerId).then((lawyer) => {
        res.status(200); res.send(lawyer);
        console.log('ID:' + req.params.lawyerId)
       
      })
        .catch((err) => {
          res.status(404); 
        });

    })

    .put(function (req, res, next) {
      let lawyerId = req.params.lawyerId;
      let body = req.body;

      console.log(body);

      Lawyers.update(lawyerId, body)
        .then((lawyer) => {
          res.status(200);
          res.send(lawyer);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    })

        .delete(function (req, res, next) {
          console.log("Delete by Id");
          let lawyerId = req.params.lawyerId;
          Lawyers.removeById(lawyerId)
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

  module.exports = LawyerRouter;


