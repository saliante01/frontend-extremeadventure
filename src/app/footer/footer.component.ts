import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) {}

  // Función para navegar a las rutas correspondientes
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
