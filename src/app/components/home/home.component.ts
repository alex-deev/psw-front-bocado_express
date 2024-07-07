import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productosCarrito!: Producto[];
  nuevoPedido: Pedido = new Pedido();
  
  constructor( private pedidoService: PedidoService ) {
    this.obtenerCarrito();
  }

  obtenerCarrito() {
    this.productosCarrito = this.pedidoService.obtenerCarrito();
  }

  obtenerTotalPedido(): number {
    let total = 0;
    this.productosCarrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }

  hacerPedido() {
    if (this.productosCarrito.length == 0) {
      console.log('Carrito vacio');
    } else {
      this.nuevoPedido.precioTotal = this.obtenerTotalPedido();
      this.pedidoService.hacerPedido(this.nuevoPedido).subscribe();
    }
  }
}
