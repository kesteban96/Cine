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
    this.getReservas();
  }

  editarReserva(reserva: Reservas){
    this.reservasService.selecionarReserva = reserva;
  }

  elminarReserva(_id: string){
 
    if(confirm('estas seguro de eliminar la reserva?')){
      this.reservasService.deleteReservas(_id)
    .subscribe(res =>{
     this.getReservas(); 
     M.toast({html: 'reserva eliminada'})
    });
    
     
   
  }}

  getReservas(){
    this.reservasService.getReservas()
    .subscribe(res =>{
      this.reservasService.reservas = res as Reservas[];
      console.log(res);
    });
  }

  agregarReserva(form: NgForm){
    if(form.value._id){
      this.reservasService.putReservas(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'reserva actualizada'});
        this.getReservas();
      });
    }else{
 
      this.reservasService.postagregarReserva(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'reserva guardada'});
        this.getReservas();
      });
    }
   
  }

  resetForm(form?: NgForm ){

    if(form){
      form.reset();
      this.reservasService.selecionarReserva = new Reservas();
    }

  }

}
