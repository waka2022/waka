import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule 
           ],

  providers: [{ 
              provide: RouteReuseStrategy,
              useClass: IonicRouteStrategy 
             },{
              provide: LocationStrategy,
              useClass: HashLocationStrategy
             },
             Geolocation],

  bootstrap: [AppComponent],
})
export class AppModule {}
