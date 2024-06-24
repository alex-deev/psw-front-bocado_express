import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  
  id = 0;
  nombre = "Hamburguesas de pollo y halloumi";
  descripcion = "Lorem ipsum dolor sit consectetur adipisicing elit. Autem placeat beatae id.";
  precio = "$ 10.5";
  imagen = "";
  estado = "Disponible";

}
