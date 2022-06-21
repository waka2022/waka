import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService {


  statusSocket:boolean

  constructor(private socket: Socket) {
    this.checkStatus()
  }

  //? -_ Metodo que chequeara el estado del servidor
  checkStatus(){
    this.socket.on('connect', () => {
      this.statusSocket = true
      console.log('conectado');
    })

    this.socket.on('disconnect', () => {
      this.statusSocket = false
      console.log('desconectado');
    })
  }

  //? -_ Metodo que escuchara cualquier evento
  listenSocket( evento: string ) {
    /**
     * ***> //? Explicacion de  de conexion socket
     *     ***> //* Consta de 4 eventos:
     *         - Socket parqueaderos
     *           //? -> emit-parkings
     *         - Socket Vehiculo
     *           //? -> emit-vehicle
     *         - Socket Reserva
     *           //? -> emit-booking
     *         - Socket Factura
     *           //? -> emit-invoiced
     */
    return this.socket.fromEvent(evento)
  }

}
