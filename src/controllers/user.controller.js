const soma = (req, res) => {
  const soma = 1 + 1;
  //send = metodo da resposta de um servidor/api
  res.send({ soma: soma });
};

module.exports = {
  soma,
};
