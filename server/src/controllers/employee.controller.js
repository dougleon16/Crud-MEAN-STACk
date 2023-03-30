// funciones para nuestras rutas
// creamos el objeto para todas nuestras rutas

const employeeCtrl = {};

//importamos el modelo de la base de datos
const Employee = require("../models/employees");
// todos los empleados
employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
//un empleado
employeeCtrl.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.send(employee);
};
//crear empleado
employeeCtrl.createEmployee = (req, res) => {
  const newEmployee = new Employee(req.body);
  newEmployee.save();
  res.send({ message: "employee created successfully" });
};
//editar empleado
employeeCtrl.editEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "Employee updated successfully" });
};
//borrar empleado
employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.send({ message: "employee deleted successfully" });
};

module.exports = employeeCtrl;
