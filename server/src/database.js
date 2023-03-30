const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/db-employees")
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
