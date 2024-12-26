import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../activity.service';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService

@Component({
  selector: 'app-create-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css'],
})
export class CreateActivitiesComponent {
  title: string = '';        // Título de la actividad
  description: string = '';  // Descripción de la actividad

  constructor(
    private activityService: ActivityService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    // Verificamos si el token es válido antes de enviar la solicitud
    if (!this.authService.isTokenValid()) {
      alert('Se necesita el token');
      return;
    }

    // Preparamos los datos del formulario
    const formData = {
      title: this.title,
      description: this.description,
    };

    // Enviamos la solicitud POST
    this.activityService.submitForm('https://wild-summer-camp.onrender.com/api/activity/create', formData).subscribe(
      (response) => {
        // Si la actividad se crea correctamente, mostramos un mensaje de éxito
        alert('Actividad creada correctamente. Por favor, refrescar la página.');

        // Limpiar el formulario
        this.title = '';
        this.description = '';
      },
      (error) => {
        // En caso de error, mostramos un mensaje de error
        alert('Error con el servidor');
      }
    );
  }
}
