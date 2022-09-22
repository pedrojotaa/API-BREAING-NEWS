import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait, connecting the database");

  mongoose
    .connect(
      process.env.MONGODB_URI,

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

export default connectDatabase;
