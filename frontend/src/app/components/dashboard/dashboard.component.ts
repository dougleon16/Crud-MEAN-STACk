import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  //metodo para obtener empleados para este componente
  getEmployees() {
    //obtener empleados desde services
    this.employeeService.getEmployees().subscribe((data) => {
      this.employeeService.employees = data;
    });
  }

  //Eliminar Empleado
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
  }
  // Editar empleado

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
}
