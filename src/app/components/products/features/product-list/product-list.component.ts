import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-acces/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export default class ProductListComponent {
  private productsService = inject(ProductsService);

  constructor() {
    this.productsService.getProducts().subscribe((products) => {
      console.log(products);
    });
  }
}
