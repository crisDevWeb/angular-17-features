import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  public menuItems = routes
  .map( route => route.children ?? [] )
  // Une todos lo arrays en uno solo
  .flat()
  // Que las rutas esten definidas y tengan path
  .filter(route => route && route.path)
  // Excluimos el user/:id
  .filter(route => route && !route.path?.includes(':'));
  
  constructor() {
    
  }
}
