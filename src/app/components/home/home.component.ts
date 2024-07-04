import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productosCarrito!: Producto[];
  
  constructor( private pedidoService: PedidoService ) {
    this.obtenerCarrito();
  }

  obtenerCarrito() {
    this.productosCarrito = this.pedidoService.obtenerCarrito();
  }

}
