//Aca tendre todos los metodos responsables de hacer las reservas, eliminarlas, modificarlas etc
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importacion encargada de la conexion con mi servidor
import { Reservas } from '../models/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

 selecionarReserva: Reservas;

  //la propiedad HttpClient me permite hacer consultas al servidor
  constructor( private http: HttpClient) { }

  getReservas(){
    //http me deja hacer las consultas...al servidor
    return this.http.get('http://localhost:3000/api/reservas');
  }
}
