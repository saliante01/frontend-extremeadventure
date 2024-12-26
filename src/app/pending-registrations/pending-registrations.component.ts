import { Component, OnInit } from '@angular/core';
import { PendingRegistrationsService } from '../pending-registrations.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth-service.service';
@Component({
  selector: 'app-pending-registrations',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './pending-registrations.component.html',
  styleUrls: ['./pending-registrations.component.css'],
})
export class PendingRegistrationsComponent implements OnInit {
  semester: string = 'SUMMER';  // Por defecto es verano
  pendingRegistrations: any[] = []; // Ahora es un arreglo de objetos

  constructor(
    private createCampService: PendingRegistrationsService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  ngOnInit(): void {
    // Verificamos si el token es válido antes de hacer la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      return;
    }

    // Realizamos la solicitud GET para obtener las inscripciones pendientes
    this.createCampService.getPendingRegistrations('https://wild-summer-camp.onrender.com/api/users/admin/pending-registrations/').subscribe(
      (response) => {
        // Asignamos directamente los registros pendientes al arreglo
        this.pendingRegistrations = response;
      },
      (error) => {
        console.error('Error fetching pending registrations:', error);
      }
    );
  }
}