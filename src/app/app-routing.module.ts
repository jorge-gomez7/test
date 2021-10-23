import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CrearEmpresaComponent } from './pages/crear-empresa/crear-empresa.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { EmpresaDetalleComponent } from './pages/empresa-detalle/empresa-detalle.component';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';



const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent },
  { path: 'crear-empresa', component: CrearEmpresaComponent },
  { path: 'empresa-detalle/:id', component: EmpresaDetalleComponent },
  { path: 'editar-empresa/:id', component: EditarEmpresaComponent },

  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: '**', redirectTo: 'empresas', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
