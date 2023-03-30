import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { FormsModule } from '@angular/forms';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    NuevoEmpleadoComponent,
    EditarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
