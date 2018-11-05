import { ItemComercio } from "./item.comercio";

export class Comercio {
    id: string;
    nombre: string;
    productos: ItemComercio[];
    posicion: Position;
    imagenRef: string;
}