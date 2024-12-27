import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { DecodeService } from '../decode.service'; // Importar el DecodeService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false; // Variable para el estado de carga

  constructor(
    private http: HttpClient,
    private router: Router,
    private decodeService: DecodeService
  ) {}

  isFormValid(): boolean {
    return this.isEmailValid(this.email) && this.password.length > 0;
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onLogin(): void {
    this.isLoading = true; // Inicia el estado de carga
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post('https://wild-summer-camp.onrender.com/api/users/login', loginData, {
        withCredentials: true,
      })
      .subscribe({
        next: (response: any) => {
          this.isLoading = false; // Detiene el estado de carga

          if (response?.jwt) {
            sessionStorage.setItem('authToken', response.jwt);
            const decodedToken = this.decodeService.decodeToken(response.jwt);

            if (decodedToken && decodedToken.role === 'admin') {
              this.router.navigate(['/home-admin']);
            } else if (decodedToken && decodedToken.role === 'user') {
              this.router.navigate(['/home-user']);
            } else {
              this.router.navigate(['/home']);
            }
          }
        },
        error: (error) => {
          this.isLoading = false; // Detiene el estado de carga
          if (error.status === 403) {
            this.errorMessage = 'Credenciales inválidas, por favor intente de nuevo.';
          } else if (error.status === 500) {
            this.errorMessage = 'Error con el servidor, por favor intente más tarde.';
          } else {
            this.errorMessage = 'Error inesperado, por favor intente nuevamente.';
          }
        },
      });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}

