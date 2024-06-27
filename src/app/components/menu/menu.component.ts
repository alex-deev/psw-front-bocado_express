import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  productos!: Array<Producto>;
  
  constructor( private productoService: ProductoService ) {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getAll().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  
}
