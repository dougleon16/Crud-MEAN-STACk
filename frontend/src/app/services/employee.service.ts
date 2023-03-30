import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL_API = 'http://localhost:3000/api/employees';
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0,
  };
  employees: Employee[] = [];
  constructor(private httpClient: HttpClient) {}

  //Obtener todos los empleados
  getEmployees() {
    return this.httpClient.get<Employee[]>(this.URL_API);
  }

  // Crear un nuevo empleado
  createEmployee(employee: Employee) {
    return this.httpClient.post(this.URL_API, employee);
  }

  // Eliminar Empleado
  deleteEmployee(id: string) {
    return this.httpClient.delete(`${this.URL_API}/${id}`);
  }

  //Editar Empleado

  editEmployee(employee: Employee) {
    return this.httpClient.put(`${this.URL_API}/${employee._id}`, employee);
  }
}
