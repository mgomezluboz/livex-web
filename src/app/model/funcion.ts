import { Establecimiento } from "./establecimiento";

export class Funcion {
    id: number;
    fechaHora: Date;
    artista: string;
    establecimiento: Establecimiento;

    constructor(fecha: Date, a: string, e: Establecimiento) {
        this.fechaHora = fecha;
        this.artista = a;
        this.establecimiento = e;
    }

}