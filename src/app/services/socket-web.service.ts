import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket {

  outEven = new EventEmitter();
  @Output() callback = new EventEmitter();

  constructor() {

    super({
      url: 'http://localhost:2105/v1/socket/new-invoiced',
    })

    this.ioSocket.on('emit-booking', res => this.callback.emit(res))
  }

  // emitEvent = (payload = {}) => {
  //   this.ioSocket.on('emit-parkings', payload)
  // }

}
