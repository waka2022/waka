import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3d60955750ac432f92df7fe3519e7d60bfdb95ef


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======

  imports: [
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule 
           ],

  providers: [{ 
              provide: RouteReuseStrategy,
              useClass: IonicRouteStrategy 
             }],

>>>>>>> 3d60955750ac432f92df7fe3519e7d60bfdb95ef
  bootstrap: [AppComponent],
})
export class AppModule {}
