import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css'],
})
export class NuevoEmpleadoComponent implements OnInit {
  newEmployee: Employee = {
    name: '',
    position: '',
    office: '',
    salary: 0,
  };
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  addEmployee(form: NgForm) {
    this.employeeService.createEmployee(form.value).subscribe((data) => {
      form.reset();
    });
  }
}
