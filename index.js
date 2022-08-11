const express = require("express");

const app = express();

//get pega e recebe algo
//callback function = função que funciona atras de outra função
//arrow function = função anonima
app.get("/", (req, res) => {
  //send = metodo da resposta de um servidor/api
  res.send("Hello World")
});

app.listen(3000);