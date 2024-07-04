import { Estado } from "./estado";

export class Producto {
    id!: number;
    nombre!: string;
    descripcion!: string;
    precio!: number;
    imagen!: string;
    estado!: Estado;
    cantidad!: number;

    Producto (id:number, nombre:string, descripcion:string, precio:number, imagen:string, estado:Estado, cantidad:number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.estado = estado;
        this.cantidad = cantidad;
    }
}
