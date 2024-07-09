import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';

import Swal from 'sweetalert2';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  pedidos!: Array<Pedido>;

  constructor ( public pedidoService: PedidoService ) {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.pedidoService.obtenerPedidos().subscribe(
      data => {
        this.pedidos = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  mostrarProductos(productos: any) {
    let texto = "";
    productos.forEach((producto: any) => {
      texto += `• ${producto.producto.nombre}: Cantidad ${producto.cantidad}, Subtotal $${producto.producto.precio * producto.cantidad}<br>`;
    });
    Swal.fire({
      title: 'Productos comprados',
      html: texto,
    });
  }

  formatearFecha(fecha: any) {
    return formatDate(fecha, 'short', 'en-US');
  }
}
