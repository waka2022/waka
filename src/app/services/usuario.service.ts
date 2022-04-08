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

  //trae la informacion de un usuario
  getInfo(token: any) {
    return this.http.get(`${this.url}/users/unique-user`, { headers: { authorization_token: token } })
  }

  inhabilitarUsuario(token) {

    return this.http.delete(`${this.url}/users/disable-account`, { headers: { authorization_token: token } })

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

  // traer el parqueadero segun id

  getParkingForId(token, id) {
    return this.http.get(`${this.url}/parking/view-parking-unique/${id}`, { headers: { authorization_token: token } })
  }

  //borrar parqueadero

  borrarParking(token, id) {
    return this.http.delete(`${this.url}/parking/delete-parking-user/${id}`, { headers: { authorization_token: token } })
  }

  //actualizar parqueadero

  updateParking(token, id, parq) {
    return this.http.put(`${this.url}/parking/update-parking-user/${id}`, parq, { headers: { authorization_token: token } })
  }

  //Actualizar la ubicacion un parqueadero segun su id

  updateParkingUbicacion(token, id, ubi) {
    return this.http.put(`${this.url}/parking/add-ubi-parking/${id}`, ubi, { headers: { authorization_token: token } })
  }

  // Actualizar la informacion de un usuario-
  updateInfoUser(token, infoAct) {
    return this.http.put(`${this.url}/users/update-info-user`, infoAct, { headers: { authorization_token: token } })
  }

  // trae los carros de un usuario

  getCarrosUser(token) {
    return this.http.get(`${this.url}/vehicle/view-my-vehicles`, { headers: { authorization_token: token } })
  }

  //obtener los parqueaderos para mostrar en el mapa

  getparkingMap(token) {
    return this.http.get(`${this.url}/parking/view-all-parking-available`, { headers: { authorization_token: token } })
  }

  //hacer una reserva

  requestReservation(token, reservacion) {
    return this.http.post(`${this.url}/booking/request-reservation`, reservacion, { headers: { authorization_token: token } })
  }

  //ver todas las reservas de un parqueadero
  getAllReservatios(token, id_parq) {
    return this.http.get(`${this.url}/booking/view-reservatios-all/${id_parq}`, { headers: { authorization_token: token } })
  }

  //ver todas las reservas de un usuario
  // estado = true Trae todas las reservas que estan en curso
  // false = trae todas las reservas asi esten canceladas o terminadas
  getAllReservatiosUser(token,estado) {
    return this.http.get(`${this.url}/booking/view-reservations-all-user/${estado}`, { headers: { authorization_token: token } })
  }

  //actualizar estado de una reserva 
  // 0 = en sitio
  // 1 = Estacionado
  // 2 = Final del parqueo
  // 3 = Cancelado

  updateStatusReservation(token, id_reserv, estado) {
    return this.http.patch(`${this.url}/booking/change-status-reservation/${id_reserv}/${estado}`, {} , { headers: { authorization_token: token }} )
  }


  //ver reserva segun su id
  getReservationForId(token, id_reserv) {
    return this.http.get(`${this.url}/booking/view-reservation-unique/${id_reserv}`, { headers: { authorization_token: token }} )
  }

}
