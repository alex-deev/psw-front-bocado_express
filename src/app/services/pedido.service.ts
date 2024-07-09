import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';
import { PedidoProducto } from '../models/pedidoProducto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:3000/api/';

  private carrito: Producto[] = [];
  public cantidadCarrito: number = 0;

  constructor( private http: HttpClient ) {}

  obtenerPedidos(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    return this.http.get(this.apiUrl + 'pedido', httpOption);
  }

  hacerPedido(nuevoPedido: Pedido): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    nuevoPedido.pedidoProductos = this.cargarProductosEnPedido();
    this.enviarMensaje(nuevoPedido);
    return this.http.post(this.apiUrl + 'pedido', nuevoPedido, httpOption);
  }

  enviarMensaje(nuevoPedido: Pedido){
    let productosTexto = "";
    
    this.carrito.forEach((producto: any) => {
      productosTexto += `• ${producto.nombre}: Cantidad ${producto.cantidad}, Precio por unidad $ ${producto.precio}\n`;
    });

    const pedidoTexto = 
    `Dirección de Envío: ${nuevoPedido.direccionEnvio}
    Teléfono: ${nuevoPedido.telefono}
    Observación: ${nuevoPedido.observacion}
    Precio Total: $${nuevoPedido.precioTotal}
    Tipo de Entrega: ${nuevoPedido.tipoEntrega}
    Nombre del Cliente: ${nuevoPedido.nombreCliente}
    Productos:
    ${productosTexto}`;

    const mensajeWhatsapp = `¡Nuevo Pedido!\n\n${pedidoTexto}`;
    const encodedMessage = encodeURIComponent(mensajeWhatsapp);
    const whatsappUrl = `https://wa.me/+5493888538446?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');

  }

  cargarProductosEnPedido(): PedidoProducto[] {
    return this.carrito.map(p => ({
      producto: p.id,
      cantidad: p.cantidad
    }));
  }

  cargarCarrito(producto: Producto) {
    // Busca en el carrito, por el id del producto que llega por parámetro
    const indiceExiste = this.carrito.findIndex((p) => p.id == producto.id);

    if(indiceExiste != -1) {
      this.carrito[indiceExiste].cantidad ++ ;
    } else {
      producto.cantidad = 1;
      this.carrito.push(producto);
      this.cantidadCarrito ++ ;
    }
    // console.log(JSON.stringify(this.carrito));
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  vaciarCarrito() {
    this.carrito = [];
  }

}