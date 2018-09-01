import { Rol } from "./rol";

export class User {
    id: string;
    username: string;
    password: string;
    token: string;
    admin: boolean;
    rol: Rol;
}