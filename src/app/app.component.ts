import { Component } from '@angular/core';
import { SocketWebService } from './services/socket-web.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private socketService: SocketWebService
  ) {}
}
