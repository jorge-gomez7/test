import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearEmpresaComponent } from './pages/crear-empresa/crear-empresa.component';
import { EmpresaDetalleComponent } from './pages/empresa-detalle/empresa-detalle.component';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    CrearEmpresaComponent,
    EmpresaDetalleComponent,
    EditarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
