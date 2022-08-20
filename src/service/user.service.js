const User = require("../models/User");

//User = schemma do mongoose
//create = metodo do mongoose que cria um novo item dentro desse schemma nesse padrao
const create = (body) => User.create(body);

module.exports = {
  create,
};
