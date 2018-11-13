import { ItemComercio } from "./item.comercio";
import { Position } from "./position";

export class Comercio {
    id: string;
    nombre: string;
    productos: ItemComercio[];
    posicion: Position;
    imagenRef: string;
}