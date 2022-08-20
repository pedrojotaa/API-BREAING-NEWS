const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait, connecting the database");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.xsb3cgb.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    //se der certo
    .then(() => console.log("MongoDB Atlas Connected"))
    //se der errado
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
