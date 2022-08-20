const User = require("../models/User");

//User = schemma do mongoose
//create = metodo do mongoose que cria um novo item dentro desse schemma nesse padrao
const createService = (body) => User.create(body);

const findAllService = () => User.find();

module.exports = {
  createService,
  findAllService,
};
