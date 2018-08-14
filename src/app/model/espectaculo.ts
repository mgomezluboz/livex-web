import { Funcion } from "./funcion";
import { Establecimiento } from "./establecimiento";

export class Espectaculo {
    id: string;
    nombre: string;
    funciones: Funcion[];
    establecimiento: Establecimiento;

    constructor() {
        this.funciones = [];
    }

    addFuncion(f:Funcion):void {
        this.funciones = this.funciones.concat(f);
    }
}