import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [HomeComponent, MenuComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  mostrarListaPedido = false;

  constructor ( public pedidoService: PedidoService ) {}

  cambiar() {
    this.mostrarListaPedido = !this.mostrarListaPedido;
  }
}
