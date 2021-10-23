import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import { RegisterForm } from '../interfaces/registerForm.interface';
import { Empresa } from '../models/empresa.model';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  public empresa: Empresa;

  constructor(private http: HttpClient, private router: Router) { }

  public url = 'https://apitest-bt.herokuapp.com/api/v1/empresas';

  getCompanys() {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'user': 'User123', 'password': 'Password123'
    });
    return this.http.get(this.url, { headers: headers });
  }


  addCompany(formData: RegisterForm) {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'user': 'User123', 'password': 'Password123'
    });
    return this.http.post(this.url, formData, { headers });
  }

  getCompany(id: any) {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'user': 'User123', 'password': 'Password123'
    });
    return this.http.get(`${this.url}/${id}`, { headers })
  }


  updateCompany(id: any, empresaForm: any) {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'user': 'User123', 'password': 'Password123'
    });

    return this.http.put(`${this.url}/${id}`, empresaForm, { headers })
  }


  deleteCompany(id: number) {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'user': 'User123', 'password': 'Password123'
    });


    return this.http.delete(`${this.url}/${id}`, { headers });

  }


}
