//Aca tendre todos los metodos responsables de hacer las reservas, eliminarlas, modificarlas etc
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importacion encargada de la conexion con mi servidor

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  //la propiedad HttpClient me permite hacer consultas al servidor
  constructor( private http: HttpClient) { }
}
