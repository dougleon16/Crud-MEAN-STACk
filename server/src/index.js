//importamos o requerimos la base de datos
require("./database");
// importamos el archivo app para levantar el servidor
const app = require("./app");

// encendemos el servidor
app.listen(app.get("port"), () => {
  console.log(`Server Listening on Port ${app.get("port")}`);
});
