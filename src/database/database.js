const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://localhost:27017/todolists-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log(`Not connected to MongoDB, erro: ${err}`));
};

module.exports = connection;
