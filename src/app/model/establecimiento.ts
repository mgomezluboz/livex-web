export class Establecimiento {
    id: string;
    nombre: string;
    direccion: string;
    capacidad: number;

    constructor();
    constructor(unNombre?: string, unaDir?: string, unNumero?: number) {
        this.nombre = unNombre || "";
        this.direccion = unaDir || "";
        this.capacidad = unNumero || 0;
    }
}