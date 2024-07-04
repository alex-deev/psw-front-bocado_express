import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:3000/api/';
  private carrito: Producto[]=[];

  constructor( private http: HttpClient ) { }

  hacerPedido(pedido: Pedido): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.apiUrl + 'pedido', pedido, httpOption);
  }

  cargarCarrito(producto: Producto) {
    this.carrito.push(producto);
    //console.log(JSON.stringify(this.carrito));
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

}