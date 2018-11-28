import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
