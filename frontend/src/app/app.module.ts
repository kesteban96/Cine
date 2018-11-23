import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { InicialComponent } from './components/inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
