// voy a definir la estructura con la que el front me reconoce lo que viene del back
export class Reservas {

    constructor(_id ='', nombrePelicula ='', nombrePersona='', nombreTeatro='',horaReserva='',ubicacion='', fecha='',precio=0){

        this._id=_id;
        this.nombrePelicula=nombrePelicula;
        this.nombrePersona=nombrePersona;
        this.nombreTeatro=nombreTeatro;
        this.horaReserva=horaReserva;
        this.ubicacion=ubicacion;
        this.fecha=fecha;
        this.precio=precio;

    }

    _id: String;
    nombrePelicula: String;
    nombrePersona: String;
    nombreTeatro:  String;
    horaReserva:  String;
    ubicacion:  String;
    fecha:  String;
    precio: Number;

}
