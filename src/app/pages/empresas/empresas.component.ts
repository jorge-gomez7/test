
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EmpresasService } from '../../services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {



  constructor(private empresasServices: EmpresasService, private router: Router) { }

  public empresas: any;

  public url = '/empresa-detalle';


  ngOnInit(): void {


    this.empresasServices.getCompanys().subscribe(res => {
      console.log(res);
      this.empresas = res;
    })
  }


  empresaDetalle(id: number) {

    this.router.navigateByUrl(`${this.url}/${id}`);

  }

  deleteCompany(id: number) {
    this.empresasServices.deleteCompany(id).subscribe(res => {
      this.router.navigateByUrl('/empresas');
    })
  }


}
