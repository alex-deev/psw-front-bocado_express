import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../models/pedido';
import Swal from 'sweetalert2';


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

  vaciarCarrito() {
    this.pedidoService.vaciarCarrito();
    this.obtenerCarrito();
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
      Swal.fire({
        title: 'Carrito vacío',
        html: '<span>Su carrito de compras está vacío.</span><br><span>Primero añada algunos deliciosos productos!</span>'
      })
    } else {
      Swal.fire({
        background: "transparent",
        title: '<span style="color: white;">Delicioso!</span>',
        html: '<span style="color: white;">Realizando su hamburguesa.</span>',
        imageUrl: "https://i.pinimg.com/originals/43/e1/c2/43e1c20c93b24a7ac41ac8e022f827fc.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Hamburguesa saltarina",
        showConfirmButton: false,
        timer: 2000,
      });
      
      this.nuevoPedido.precioTotal = this.obtenerTotalPedido();
      this.pedidoService.hacerPedido(this.nuevoPedido).subscribe();
    }
  }
}
