import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class WakaFileService {

  private url = "https://wakafilesback.herokuapp.com/waka-files/v1/producction"
  public user_data: User


  constructor(private http: HttpClient) {
  }
  traerToken() {
    let token = localStorage.getItem("token")
    return token
  }

      //agregar novedades foto
  addNovPhotos(token, novVehiculo) {
    return this.http.post(`${this.url}/photos/upload-photo/0/62336ceeb9f4923b2b4e8f0b`, novVehiculo, { headers: { authorization_token: token } })
  }
   
}
