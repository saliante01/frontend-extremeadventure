import { Component } from '@angular/core';
import { EditWeekFormService } from '../editweekform.service';
import { AuthService } from '../auth-service.service'; // Asegúrate de importar el servicio de autenticación
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-edit-week',
  imports: [FormsModule],
  templateUrl: './form-edit-week.component.html',
  styleUrls: ['./form-edit-week.component.css'],
})
export class FormEditWeekComponent {
  campType: string = ''; // '1' for summer, '2' for winter
  campId: number = 0; // Automatically updated based on campType
  weekId: number = 0;
  startYear: number = new Date().getFullYear();
  startMonth: number = new Date().getMonth() + 1;
  startDay: number = new Date().getDate();
  endYear: number = new Date().getFullYear();
  endMonth: number = new Date().getMonth() + 1;
  endDay: number = new Date().getDate();
  price: number = 0;
  capacity: number = 0;

  constructor(
    private editWeekFormService: EditWeekFormService,
    private authService: AuthService // Inyectar el servicio de autenticación
  ) {}

  updateCampId(): void {
    this.campId = parseInt(this.campType, 10);
  }

  onSubmit(): void {
    // Verificar si el token es válido
    if (!this.authService.isTokenValid()) {
      alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
      return; // No enviar el formulario si el token no es válido
    }

    if (!this.campId || !this.weekId) {
      alert('Camp ID y Week ID son obligatorios.');
      return;
    }

    const url = `https://wild-summer-camp.onrender.com/api/camp/${this.campId}/week/${this.weekId}/`;
    const formData = {
      start_date: `${this.startYear}-${this.startMonth.toString().padStart(2, '0')}-${this.startDay.toString().padStart(2, '0')}`,
      end_date: `${this.endYear}-${this.endMonth.toString().padStart(2, '0')}-${this.endDay.toString().padStart(2, '0')}`,
      price: this.price,
      capacity: this.capacity,
    };

    // Enviar la solicitud solo si el token es válido
    this.editWeekFormService.submitForm(url, formData).subscribe(
      (response) => {
        alert('Semana actualizada correctamente');
        
        // Limpiar el formulario
        this.campType = '';
        this.campId = 0;
        this.weekId = 0;
        this.startYear = new Date().getFullYear();
        this.startMonth = new Date().getMonth() + 1;
        this.startDay = new Date().getDate();
        this.endYear = new Date().getFullYear();
        this.endMonth = new Date().getMonth() + 1;
        this.endDay = new Date().getDate();
        this.price = 0;
        this.capacity = 0;
      },
      (error) => {
        alert('Error con el servidor');
      }
    );
  }
}
