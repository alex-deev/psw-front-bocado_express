import { Component, Input } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';
import { Producto } from '../../models/producto';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() producto!: Producto;

  constructor( private pedidoService: PedidoService ) {}

  agregarAlCarrito() {
    this.pedidoService.cargarCarrito(this.producto);
  }

}
