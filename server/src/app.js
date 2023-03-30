const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//inicializar express
const app = express();

// seleccionar puerto dinamicamente con express

app.set("port", process.env.PORT || 3000);

//utilizar cors para que el servidor pueda recibir peticiones desde otros dominios
app.use(cors());

//utilizamos morgan como middleware para mostrar en la terminal los requests
app.use(morgan("dev"));

// para que express sepa leer json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//usamos las rutas
app.use("/api/employees", require("./routes/employees.routes"));

module.exports = app;
