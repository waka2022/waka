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

}
