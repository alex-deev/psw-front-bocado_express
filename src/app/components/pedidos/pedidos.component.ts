import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';

import Swal from 'sweetalert2';
import { Producto } from '../../models/producto';
import { PedidoProducto } from '../../models/pedidoProducto';

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

  mostrarProductos(productos: PedidoProducto[]) {
    Swal.fire({
      title: 'Productos comprados',
      text: JSON.stringify(productos),
    });
  }
}
