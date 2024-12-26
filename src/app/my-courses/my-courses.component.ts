import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesService } from '../my-courses.service';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent implements OnInit {
  registeredWeeks: any[] = [];  // Aquí almacenamos las semanas registradas
  loading: boolean = true; // Indicador de carga

  constructor(
    private pendingRegistrationsService: MyCoursesService,
    private authService: AuthService, // Inyectamos el AuthService
    private router: Router // Inyectamos el router para redirigir
  ) {}

  ngOnInit(): void {
    // Verificamos si el token es válido antes de hacer la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('El token no es válido o ha expirado.');
      this.router.navigate(['/login']); // Redirigimos a la página de login
      return;
    }

    // Realizamos la solicitud GET para obtener las semanas registradas
    this.pendingRegistrationsService.getRegisteredWeeks('https://wild-summer-camp.onrender.com/api/users/registered-weeks/')
      .subscribe(
        (response) => {
          this.registeredWeeks = response;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching registered weeks:', error);
          this.loading = false;
        }
      );
  }

  // Función para redirigir a la vista de actividades con el ID de la semana
  goToActivities(weekId: number): void {
    this.router.navigate([`/header-activityinfo/${weekId}`]);
  }
}
