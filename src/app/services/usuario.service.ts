import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://wakabackend.herokuapp.com/v1/producction"

  //url para wakafile
  private urlFile ="https://wakafiles.azurewebsites.net/waka-files/v1/producction/photos"

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

   //login con google @samuel. (token de google)
   signGoogle(token) {
    return this.http.post(`${this.url}/auth/google`, token)
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

  //cambiar la contraseña de una cuenta @samuel.( token y info form)
  cambiarContraseña(token, infopass) {
    return this.http.put(`${this.url}/auth/reset-password/${token}`, infopass)
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

  //eliminar un vehiculo @samuel.(token y id del vehiculo)
  eliminarVehiculo(token, id) {
    return this.http.delete(`${this.url}/vehicle/delete-vehicle-user/${id}`, { headers: { authorization_token: token } })
  }

  // Actualizar la informacion de un vehiculo @samuel. (token, id vehiculo y info del fomr)
  updateInvehiculo(token, id, infoCar) {
    return this.http.put(`${this.url}/vehicle/update-vehicle-user/${id}`, infoCar, { headers: { authorization_token: token } })
  }

  // Actualizar el estado de un vehiculo (el que esta activo)
  
  updateStatusVehiculo(token, id_vehic) {
    return this.http.patch(`${this.url}/vehicle/status-change-vehicle/${id_vehic}`, {}, { headers: { authorization_token: token } })
  }

  //traer info de un veiculo segun id. @Samuel (token id del vehiculo)
  getVehicleId(token, id) {
    return this.http.get(`${this.url}/vehicle/view-unique-vehicle/${id}`, { headers: { authorization_token: token } })
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
  // estado = true Trae todas las reservas que estan en curso
  // false = trae todas las reservas asi esten canceladas o terminadas

  getAllReservatios(token, id_parq, estado) {
    return this.http.get(`${this.url}/booking/view-reservatios-all/${id_parq}/${estado}`, { headers: { authorization_token: token } })
  }

  //ver todas las reservas de un usuario
  // estado = true Trae todas las reservas que estan en curso
  // false = trae todas las reservas asi esten canceladas o terminadas

  getAllReservatiosUser(token, estado) {
    return this.http.get(`${this.url}/booking/view-reservations-all-user/${estado}`, { headers: { authorization_token: token } })
  }

  //actualizar estado de una reserva 
  // 0 = en sitio
  // 1 = Estacionado
  // 2 = Final del parqueo
  // 3 = Cancelado

  updateStatusReservation(token, id_reserv, estado) {
    return this.http.patch(`${this.url}/booking/change-status-reservation/${id_reserv}/${estado}`, {}, { headers: { authorization_token: token } })
  }

  // crear factura
  crearFactura(token, id_reserv) {
    return this.http.post(`${this.url}/invoiced/register/${id_reserv}`, {}, { headers: { authorization_token: token } })
  }


  //ver reserva segun su id
  getReservationForId(token, id_reserv) {
    return this.http.get(`${this.url}/booking/view-reservation-unique/${id_reserv}`, { headers: { authorization_token: token } })
  }


  // ver el tiempo que lleva un vehiculo
  getTimeReservation(token, id_reserv) {
    return this.http.get(`${this.url}/booking/view-time-parking-vehicle/${id_reserv}`, { headers: { authorization_token: token } })
  }

  //califica un parqueadero
  calificarParqueadero(token, calificacion) {
    return this.http.post(`${this.url}/ranking/register-ranking`, calificacion, { headers: { authorization_token: token } })
  }

  //ver la calificacion de un parqueadero
  vercalificarParqueadero(token, id_parq) {
    return this.http.get(`${this.url}/ranking/average-ranking-parking/${id_parq}`, { headers: { authorization_token: token } })
  }

  //! servicios para archivos

//?Donde:
//* - type_action: Es un numero de 0 a 2:

// 0 = Foto de perfil de usuario
// 1 = Registro fotografico de novedades
// 2 = Fotos de un parqueadero registrado

//* - id_action:

// Sera el id unico del registro del tipo al que apuntara, es decir. 
// Si se apunta a 0 debe ir el id del usuario al que se le actualizara la foto, 
// si se apunta a 1 sera el id de la reserva a la cual se le agregara la novedad, 
// si se apunta a 2 debe ir el id del parqueadero al que se le agregaran las fotos



  //subir y enviar archivos a waka @samuel
  //*token en header
  //*info from data (key:photos) en body
  postWakaFile(type_action, id_action, token, info){
    return this.http.post(`${this.urlFile}/upload-photo/0/624f6a2a2aaf4ec9e7882bf9`,{ headers: { authorization_token: token } })
  }


  //ver fotos unicas segun ruta @samuel
  //*token en header
  //*path esca del documento guardado en la coleccion  en header servicio de get parqueadero o get vehiculo columba(photos).
  getWakaFile(token, path){
    return this.http.get(`${this.urlFile}/view-photos-unique`)
  }

  //eliminar un foto @samuel
  //*token en header
  daleteWakaFile(token, id_photo){
    return this.http.delete(`${this.urlFile}/delete-photo/6237b4b071c0cbcf0a5f979c`)
  }

  //ver foto segun el tipo waka  (era un servicio de prueba)

  


  //verificacion de cuenta

  verificacionCuenta(id) {

    return this.http.put(`${this.url}/auth/verify-account/${id}`, {})

  }

  // solicitud por email
  // Solicitud para la re-activacion de cuenta {{ 0 }}.
  // Solicitud para la verificacion del email {{ 1 }}.
   // Solicitud para cambiar pass de la cuenta {{ 2 }} @samuel

  solicitudEmail(email, tipo) {
    return this.http.post(`${this.url}/auth/request-emails-account/${tipo}`, {'email':email})
  }

}
