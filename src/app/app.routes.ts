import { Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClienteComponent } from './components/cliente/cliente.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: PedidosComponent
    },
    {
        path: 'cliente',
        component: ClienteComponent
    },
    {
        path: '',
        redirectTo: 'cliente',
        pathMatch: 'full'
    }
];
