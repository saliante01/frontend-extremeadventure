import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService
import { AceptregistrationService } from '../aceptregistration.service';

@Component({
  selector: 'app-acept-registration',
  imports: [CommonModule, FormsModule],
  templateUrl: './acept-registration.component.html',
  styleUrls: ['./acept-registration.component.css']
})
export class AceptRegistrationComponent {
  registrationId: number = 0; // ID que se ingresará en el formulario

  constructor(
    private registrationService: AceptregistrationService, // Inyectamos el servicio de registro
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    if (!this.authService.isTokenValid()) {
      window.alert('Se necesita el token, porfavor Cierra sesión e Ingresa nuevamente');
      return;
    }

    this.registrationService.confirmRegistration(this.registrationId).subscribe(
      (response) => {
        window.alert('Registro confirmado exitosamente, porfavor refresca la pagina');
        this.registrationId = 0;  // Limpiamos el formulario
      },
      (error) => {
        window.alert('Error al comunicarse con el servidor');
        if (error.error) {
          console.error('Detalles del error:', error.error); // Solo logueamos el error en consola
        }
      }
    );
  }
}
