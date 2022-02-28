import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://wakabackend.herokuapp.com/v1/producction"

  constructor( private http:HttpClient) { }

  crearUsuario( usuario:any ){

    return this.http.post(`${this.url}/users`, usuario)

  }
}
