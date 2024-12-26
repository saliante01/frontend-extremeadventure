import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeekService } from '../services/week.service';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService

@Component({
  selector: 'app-create-weeks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-weeks.component.html',
  styleUrls: ['./create-weeks.component.css'],
})
export class CreateWeeksComponent {
  start_date: string = '';  // Fecha de inicio
  end_date: string = '';    // Fecha de fin
  price: number = 0;        // Precio
  capacity: number = 0;     // Capacidad
  semester: number = 1;     // ID del campamento (1 para verano, 2 para invierno)

  constructor(
    private weekService: WeekService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    // Verificamos si el token es válido antes de enviar la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      window.alert('Se necesita el token');
      return;
    }

    // Preparamos los datos del formulario
    const formData = {
      start_date: this.start_date,
      end_date: this.end_date,
      price: this.price,
      capacity: this.capacity,
    };

    // Construimos la URL con el ID del campamento (semestre)
    const campId = this.semester === 1 ? '1' : '2'; // Usamos 1 para verano y 2 para invierno
    const url = `https://wild-summer-camp.onrender.com/api/camp/${campId}/week/create`;

    // Enviamos la solicitud POST
    this.weekService.submitForm(url, formData).subscribe(
      (response) => {
        alert("Semana creada correctamente, Porfavor Refrescar la página");

        // Limpiar el formulario después de un envío exitoso
        this.start_date = '';
        this.end_date = '';
        this.price = 0;
        this.capacity = 0;
        this.semester = 1; // Resetear el valor de semestre a su valor predeterminado
      },
      (error) => {
        console.error('Error con el servidor:', error);
      }
    );
  }
}
