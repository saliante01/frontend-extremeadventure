import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateCampService } from '../create-camp.service';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService

@Component({
  selector: 'app-create-camps',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-camps.component.html',
  styleUrls: ['./create-camps.component.css'],
})
export class CreateCampsComponent {
  semester: string = 'SUMMER';  // Por defecto es verano

  constructor(
    private createCampService: CreateCampService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    // Verificamos si el token es válido antes de enviar la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('Porfavor Cerrar sesión y Ingresar nuevamente');
      return;
    }

    // Preparamos los datos del formulario
    const formData = {
      semester: this.semester,  // Enviamos el tipo de campamento (SUMMER, WINTER, SPRING)
    };

    // Enviamos la solicitud POST
    this.createCampService.submitForm('https://wild-summer-camp.onrender.com/api/camp/create', formData).subscribe(
      (response) => {
        alert("Campamento creado correctamente, Porfavor Refrescar la página");
        
        // Limpiar el formulario después de un envío exitoso
        this.semester = 'SUMMER'; // Restablecer al valor por defecto
      },
      (error) => {
        console.error('Error con el servidor:', error);
      }
    );
  }
}
