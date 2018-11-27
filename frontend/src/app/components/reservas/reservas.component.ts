import { Component, OnInit } from '@angular/core';
import {ReservasService} from '../../services/reservas.service';
import { provideForRootGuard } from '@angular/router/src/router_module';
import { NgForm } from '@angular/forms';
import { Reservas } from 'src/app/models/reservas';
import { Subscriber } from 'rxjs';

declare var M: any;
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  providers:[ReservasService]
})
export class ReservasComponent implements OnInit {

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
  }

  agregarReserva(form: NgForm){
    this.reservasService.postagregarReserva(form.value)
    .subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'reserva guardada'});
    });
  }

  resetForm(form?: NgForm ){

    if(form){
      form.reset();
      this.reservasService.selecionarReserva = new Reservas();
    }

  }

}
