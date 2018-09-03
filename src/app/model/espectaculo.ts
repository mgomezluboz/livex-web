import { Funcion } from "./funcion";
import { Establecimiento } from "./establecimiento";
import { Comercio } from "./comercio";

export class Espectaculo {
    id: string;
    nombre: string;
    funciones: Funcion[];
    establecimiento: Establecimiento;
    comercios: Comercio[];

    constructor() {
        this.funciones = [];
    }

    addFuncion(f:Funcion):void {
        this.funciones = this.funciones.concat(f);
    }
}