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

  inhabilitarUsuario(){
    
    return this.http.delete(`${this.url}/users/disable-account`, { headers: {authorization_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGVjNmI1ZWQ3YmNlMTIyZDIwMDNkZCIsImlhdCI6MTY0NTQ2ODA1MiwiZXhwIjoxNjQ1NDg2MDUyfQ.t6hpwpgfPhmnb3Cmb50lq-p4k94jmfNirEoAOEmZJVc"} })

  }
  

}
