import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmmitersService {

  public $emmiterProfile: EventEmitter<boolean> = new EventEmitter

  constructor(
  ) { }


}
