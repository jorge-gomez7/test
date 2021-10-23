import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { EmpresasService } from 'src/app/services/empresas.service';


@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent {

  formSubmitted = false;

  public empresaForm = this.fb.group({
    nombre_comercial: ['', Validators.required],
    razon_social: ['', Validators.required],
    telefono: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    nit: ['', Validators.required],
    direccion: ['', Validators.required],
    estado: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private empresaService: EmpresasService, private router: Router) {

  }

  campoNoValido(campo: string): boolean {
    if (this.empresaForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }


  addCompany() {
    this.formSubmitted = true;

    if (this.empresaForm.invalid) {
      return;
    } else {
      this.empresaService.addCompany(this.empresaForm.value).subscribe(res => {
        console.log('Empresa creada exitosamente');
        console.log(res);
        this.router.navigateByUrl('/empresas');
      }, (error) => {
        console.log(error);
      });
    }
  }

}
