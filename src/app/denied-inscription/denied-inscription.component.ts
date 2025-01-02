import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { DeniedInscriptionService } from '../denied-inscription.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-denied-inscription',
  imports: [CommonModule,FormsModule],
  templateUrl: './denied-inscription.component.html',
  styleUrl: './denied-inscription.component.css'
})
export class DeniedInscriptionComponent {
  registrationId: number = 0; // ID que se ingresará en el formulario

  constructor(
    private registrationService: DeniedInscriptionService, // Inyectamos el servicio de registro
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
          alert("Error con el servidor");
          console.error('Detalles del error:', error.error); // Solo logueamos el error en consola
        }
      }
    );
  }
}
