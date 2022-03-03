import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://wakabackend.herokuapp.com/v1/producction"

  public user_data: User

  constructor( private http:HttpClient) { 

  }



  crearUsuario( usuario:any ){
    return this.http.post(`${this.url}/users`, usuario)
  }

  signInNormal( signin:any ){
    return this.http.post(`${this.url}/auth/normal`, signin)
  }

  getInfo( token:any ){
    return this.http.get(`${this.url}/users/unique-user`, { headers: { authorization_token : token}  })
  }

}
