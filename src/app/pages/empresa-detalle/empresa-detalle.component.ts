import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


import { EmpresasService } from 'src/app/services/empresas.service';



@Component({
  selector: 'app-empresa-detalle',
  templateUrl: './empresa-detalle.component.html',
  styleUrls: ['./empresa-detalle.component.css']
})
export class EmpresaDetalleComponent implements OnInit {

  public url: '/editar-empresa';
  public empresa: any;


  constructor(private empresasServices: EmpresasService, private activateRoute: ActivatedRoute, private router: Router) {

  }



  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.empresasServices.getCompany(id).subscribe(res => {
      this.empresa = res;
    })
  }


  updateCompany(id: number) {
    this.router.navigateByUrl(`/editar-empresa/${id}`);

  }



  deleteCompany() {
    this.empresasServices.deleteCompany(this.empresa.id).subscribe(res => {
      this.router.navigateByUrl('/empresas');
    })
  }


}
