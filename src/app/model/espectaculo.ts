import { Funcion } from "./funcion";

export class Espectaculo {
    id: number;
    nombre: string;
    funciones: Funcion[];

    constructor(n: string) {
        this.nombre = n;
        this.funciones = [];
    }

    addFuncion(f:Funcion):void {
        this.funciones = this.funciones.concat(f);
    }
}