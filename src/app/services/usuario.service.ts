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

  constructor(private http: HttpClient) {

  }

  traerToken() {
    let token = localStorage.getItem("token")
    return token

  }


  crearUsuario(usuario: any) {
    return this.http.post(`${this.url}/users`, usuario)
  }

  signInNormal(signin: any) {
    return this.http.post(`${this.url}/auth/normal`, signin)
  }

  getInfo(token: any) {
    return this.http.get(`${this.url}/users/unique-user`, { headers: { authorization_token: token } })
  }

  //deshabilitar una cuenta @samuel.
  inhabilitarUsuario(token) {

    return this.http.delete(`${this.url}/users/disable-account`, { headers: { authorization_token: token } })

  }

  //eliminar un vehiculo @samuel.
  eliminarVehiculo(token, id){
  return this.http.delete(`${this.url}/vehicle/delete-vehicle-user/${id}`, { headers: { authorization_token: token } })
  }

  //!estoy aca
  //traer info de un veiculo segun id. @Samuel
  getVehicleId(token,id){
    return this.http.get(`${this.url}/vehicle/view-unique-vehicle/${id}`,  { headers: { authorization_token: token } })
  }

  // Actualizar la informacion de un vehiculo @samuel.
  updateInvehiculo(token, id, infoCar) {
    return this.http.put(`${this.url}/vehicle/update-vehicle-user/${id}`, infoCar, { headers: { authorization_token: token } })
  }

  //login con google @samuel.
  signGoogle(signinGo:any){
    return this.http.post(`${this.url}/auth/google`, signinGo)
  }

  //verificacion de cuenta @samuel.
  verificarCuenta(token){
    //return this.http.put(`${this.url}/auth/verify-account/${token}`)
  }

  //cambiar la contraseña de una cuenta @samuel.
  cambiarContraseña(token, infopass){
    return this.http.put(`${this.url}/auth/reset-password/${token}`, infopass)
    }

  //mensaje por correo y cambiar contrasena
  messCorreo(email){
    return this.http.post(`${this.url}/auth/request-emails-account/2`, email)
    
  }

  //mesaje por correo y validar el nuevo registro
  messverificacion(email){
    return this.http.post(`${this.url}/auth/request-emails-account/1`, email)
  }


  addInfoUser(token, infoAdd) {

    return this.http.put(`${this.url}/users/add-info`, infoAdd, { headers: { authorization_token: token } })

  }

  //Agregar un vehiculo

  addVehicleUser(token, infoCar) {
    return this.http.post(`${this.url}/vehicle/add-vehicle-user`, infoCar, { headers: { authorization_token: token } })
  }

  // Crear un parqueadero

  addParking(token, infoPar) {
    return this.http.post(`${this.url}/parking/add-parking-user`, infoPar, { headers: { authorization_token: token } })
  }

  // traer los parqueaderos del usuario PP

  getParking(token) {
    return this.http.get(`${this.url}/parking/view-parking-user`, { headers: { authorization_token: token } })
  }

  // Actualizar la informacion de un usuario-
  updateInfoUser(token, infoAct) {
    return this.http.put(`${this.url}/users/update-info-user`, infoAct, { headers: { authorization_token: token } })
  }

  // trae los carros de un usuario

  getCarrosUser(token) {
    return this.http.get(`${this.url}/vehicle/view-my-vehicles`, { headers: { authorization_token: token } })
  }

}
