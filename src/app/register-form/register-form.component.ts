import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // Añadido para almacenar la confirmación de la contraseña
  showModal: boolean = false; // Controla la visibilidad del modal
  isLoading: boolean = false; // Indica si se está procesando la solicitud
  successMessage: string = ''; // Mensaje de éxito
  errorMessage: string = ''; // Mensaje de error

  constructor(private router: Router, private http: HttpClient) {}

  isFormValid(): boolean {
    return (
      this.firstName.length > 0 &&
      this.lastName.length > 0 &&
      this.isEmailValid(this.email) &&
      this.password.length > 0 &&
      this.password === this.confirmPassword // Verifica que las contraseñas coincidan
    );
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onRegister(): void {
    const userData = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
    };

    this.isLoading = true; // Comienza a procesar la solicitud
    this.successMessage = ''; // Limpiar mensajes previos
    this.errorMessage = ''; // Limpiar mensajes previos

    // Enviar solicitud POST
    this.http
      .post('https://wild-summer-camp.onrender.com/api/users/register', userData)
      .pipe(
        catchError((error) => {
          console.error('Error al registrar:', error);
          this.errorMessage = 'No se pudo registrar correctamente, verifica que este correo no exista en nuestra plataforma.';
          this.isLoading = false; // Detener el estado de carga
          return of(null); // Continuar sin interrumpir flujo en caso de error
        })
      )
      .subscribe((response: any) => {
        this.isLoading = false; // Detener el estado de carga
        if (response) {
          console.log('Usuario registrado:', response);
          this.successMessage = 'Usuario creado correctamente.';
          // Limpiar el formulario
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = ''; // Limpiar la confirmación de la contraseña
        }
      });
  }

  closeModal(): void {
    this.showModal = false;
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
