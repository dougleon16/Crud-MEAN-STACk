import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEmpleadoComponent } from '../editar-empleado/editar-empleado.component';
import { NuevoEmpleadoComponent } from '../nuevo-empleado/nuevo-empleado.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'new-employee',
    component: NuevoEmpleadoComponent,
  },
  {
    path: 'edit-employee/:id',
    component: EditarEmpleadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
