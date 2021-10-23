
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterForm } from '../../interfaces/registerForm.interface'

import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {


  public empresa: any;

  formSubmitted = false;




  constructor(private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private empresaService: EmpresasService) {

  }





  public empresaForm = new FormGroup({
    nombre_comercial: new FormControl(''),
    razon_social: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl({ value: '', disabled: true }),
    nit: new FormControl(''),
    direccion: new FormControl(''),
    estado: new FormControl('')
  })


  ngOnInit(): void {

    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.empresaService.getCompany(id).subscribe(res => {
      this.empresa = res;

      this.empresaForm.setValue({
        nombre_comercial: this.empresa.nombre_comercial,
        razon_social: this.empresa.razon_social,
        telefono: this.empresa.telefono,
        correo: this.empresa.correo,
        nit: this.empresa.correo,
        direccion: this.empresa.direccion,
        estado: this.empresa.estado
      });
    });
  }


  campoNoValido(campo: string): boolean {
    if (this.empresaForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  updateCompany() {

    const form = JSON.stringify(this.empresaForm.value);

    this.empresaService.updateCompany(this.empresa.id, form).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/empresas');
    })
  }

}
