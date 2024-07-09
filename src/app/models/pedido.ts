import { PedidoProducto } from "./pedidoProducto";

export class Pedido {
    fechaHora!: Date;
    direccionEnvio!: string;
    telefono!: string;
    observacion!: string;
    precioTotal!: number;
    tipoEntrega!: string;
    nombreCliente!: string;
    pedidoProductos!: PedidoProducto[];

    Pedido(fechaHora:Date, direccionEnvio:string, telefono:string, observacion:string, precioTotal:number, tipoEntrega:string, nombreCliente:string, pedidoProductos:PedidoProducto[]) {
        this.fechaHora = fechaHora;
        this.direccionEnvio = direccionEnvio;
        this.telefono = telefono;
        this.observacion = observacion;
        this.precioTotal = precioTotal;
        this.tipoEntrega = tipoEntrega;
        this.nombreCliente = nombreCliente;
        this.pedidoProductos = pedidoProductos;
    }
}

    // "direccionEnvio": "2 de abril",
    // "telefono": "546567",
    // "observacion": "calentito",
    // "precioTotal": 4700.23,
    // "tipoEntrega": "Delivery",
    // "nombreCliente": "brian",
    // "pedidoProductos": [
    //     {
    //     "pedido": 1,
    //     "producto": 1,
    //     "cantidad": 1
    // },
    // {
    //     "pedido": 1,
    //     "producto": 2,
    //     "cantidad": 4
    // }