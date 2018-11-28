//Aca tendre todos los metodos responsables de hacer las reservas, eliminarlas, modificarlas etc
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importacion encargada de la conexion con mi servidor
import { Reservas } from '../models/reservas';
import {ReservasComponent} from '../components/reservas/reservas.component';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

 selecionarReserva: Reservas;
 reservas: Reservas[];//areglo de las reservas
  readonly URL_API= 'http://localhost:3000/api/reservas';
  //la propiedad HttpClient me permite hacer consultas al servidor

  constructor( private http: HttpClient) { 
    this.selecionarReserva = new Reservas();

  }
 

  //metodo para buscar las reservass
  getReservas(){
    return this.http.get(this.URL_API);
  }
  //metodo para agregar una reserva
  postagregarReserva(Reserva:Reservas){

      return this.http.post(this.URL_API,Reserva);
  }

  putReservas(reserva: Reservas){
    return this.http.put(this.URL_API + `/${reserva._id}`,reserva);
  }

  deleteReservas(_id : string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
