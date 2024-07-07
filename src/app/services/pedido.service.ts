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

  constructor( private http: HttpClient ) {}

  hacerPedido(nuevoPedido: Pedido): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    nuevoPedido.pedidoProductos = this.cargarProductosEnPedido();
    // console.log(JSON.stringify(nuevoPedido));
    return this.http.post(this.apiUrl + 'pedido', nuevoPedido, httpOption);
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