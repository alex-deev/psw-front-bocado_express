import { Component, Input } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() producto!: Producto;

}
