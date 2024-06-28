import { Component } from '@angular/core';
import ProductListComponent from '../products/features/product-list/product-list.component';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  
}
