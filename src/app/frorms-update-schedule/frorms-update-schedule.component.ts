import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { FormsUpdateScheduleService } from '../forms-update-schedule.service';

@Component({
  selector: 'app-frorms-update-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './frorms-update-schedule.component.html',
  styleUrl: './frorms-update-schedule.component.css',
})
export class FrormsUpdateScheduleComponent {
  weekId: number = 0; // ID de la semana
  scheduleId: number = 0; // ID de la actividad agendada
  activity: number = 0; // Número de actividad
  date: string = ''; // Fecha en formato 'YYYY-MM-DD'
  start_time: string = ''; // Hora de inicio (HH:MM:SS)
  end_time: string = ''; // Hora de fin (HH:MM:SS)
  location: string = ''; // Ubicación de la actividad
  requirements: string | null = null; // Requisitos opcionales, puede ser null

  constructor(
    private scheduleFormService: FormsUpdateScheduleService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    if (!this.weekId || !this.scheduleId || !this.activity || !this.date || !this.start_time || !this.end_time || !this.location) {
      console.error('All fields are required.');
      return;
    }

    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      alert('Tu sesión ha expirado o no estás autenticado. Por favor, inicia sesión nuevamente.');
      return;
    }

    const formData = {
      activity: this.activity,
      date: this.date,
      start_time: this.start_time,
      end_time: this.end_time,
      location: this.location,
      requirements: this.requirements,
    };

    const url = `https://wild-summer-camp.onrender.com/api/week/${this.weekId}/schedule/${this.scheduleId}`;

    this.scheduleFormService.updateForm(url, formData).subscribe(
      (response) => {
        alert('Actividad actualizada correctamente');
      },
      (error) => {
        console.error('Error updating schedule:', error);
      }
    );
  }
}
