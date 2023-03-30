// Manejo de rutas con Router en express para nuestra api rest

// requrimos router
const router = require("express").Router();

//importamos nuestras funciones para cada ruta
const employeeCtrl = require("../controllers/employee.controller");

//destructuring del objeto employeeCtrl
const {
  getEmployees,
  createEmployee,
  getEmployee,
  deleteEmployee,
  editEmployee,
} = employeeCtrl;

router.get("/", getEmployees);
router.post("/", createEmployee);
router.get("/:id", getEmployee);
router.delete("/:id", deleteEmployee);
router.put("/:id", editEmployee);

module.exports = router;
