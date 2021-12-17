const Lawyers = require('./lawyer');
const LawyersService = require('./service');

const service = LawyersService(Lawyers);

module.exports=service;