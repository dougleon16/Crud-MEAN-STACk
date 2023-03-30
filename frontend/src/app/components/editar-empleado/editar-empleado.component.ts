import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
})
export class EditarEmpleadoComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {}

  editEmployee() {
    this.employeeService
      .editEmployee(this.employeeService.selectedEmployee)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
