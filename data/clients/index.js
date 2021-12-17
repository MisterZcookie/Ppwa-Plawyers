const Clients = require('./clients');
const ClientsService = require('./service');

const service = ClientsService(Clients);

module.exports=service;