import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { ListCourseService } from '../list-course.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-course',
  imports: [FormsModule,CommonModule],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css'
})
export class ListCourseComponent {
  weekId: number = 0;  // Número de semana ingresado
  registrations: any[] = [];  // Array para almacenar los registros

  constructor(
    private userService: ListCourseService,  // Servicio para hacer la solicitud GET
    private authService: AuthService  // Si es necesario para manejar el token
  ) {}

  onSubmit(): void {
    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      window.alert('Se necesita el token');
      return;
    }

    // Realizamos la solicitud GET para obtener los registros de la semana
    this.userService.getRegistrations(this.weekId).subscribe(
      (response) => {
        // Asignamos la respuesta a registrations
        this.registrations = response;
      },
      (error) => {
        console.error('Error al obtener los registros:', error);
        window.alert('Hubo un error al obtener los registros');
      }
    );
  }
}