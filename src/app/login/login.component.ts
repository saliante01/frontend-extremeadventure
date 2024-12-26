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

  constructor(
    private http: HttpClient,
    private router: Router,
    private decodeService: DecodeService // Inyectar el servicio DecodeService
  ) {}

  isFormValid(): boolean {
    return this.isEmailValid(this.email) && this.password.length > 0;
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onLogin(): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };
  
    this.http.post('https://wild-summer-camp.onrender.com/api/users/login', loginData, { withCredentials: true })
      .subscribe({
        next: (response: any) => {
          if (response?.jwt) {
            // Almacena el JWT en sessionStorage
            sessionStorage.setItem('authToken', response.jwt);
            console.log('Login exitoso, token guardado en sessionStorage.');
  
            // Establecer cookie con expiración de 10 segundos
            const expirationDate = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos // 10 segundos
            document.cookie = `jwt=${response.jwt}; expires=${expirationDate.toUTCString()}; path=/`;
            console.log('Cookie guardada, expirará en 10 segundos.');
  
            // Decodificar el JWT para obtener los datos del usuario
            const decodedToken = this.decodeService.decodeToken(response.jwt);
            console.log('Token decodificado:', decodedToken); // Imprimir el token completo en consola
  
            // Verificar el rol y redirigir según corresponda
            if (decodedToken && decodedToken.role === 'admin') {
              // Redirigir al componente home-admin si el rol es admin
              this.router.navigate(['/home-admin']);
            } else if (decodedToken && decodedToken.role === 'user') {
              // Redirigir al componente home-user si el rol es user
              this.router.navigate(['/home-user']);
            } else {
              // En caso de que el rol no sea reconocido, redirigir a la página de inicio
              console.error('Rol no reconocido:', decodedToken?.role);
              this.router.navigate(['/home']);
            }
  
            // Eliminar el token y la cookie después de 10 segundos
            setTimeout(() => {
              sessionStorage.removeItem('authToken'); // Elimina el token del sessionStorage
              document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Elimina la cookie
              console.log('Token y cookie borrados');
            }, 10 * 60 * 1000); // 10 segundos
          } else {
            console.error('Respuesta inesperada del servidor:', response);
          }
        },
        error: (error) => {
          console.error('Error al intentar iniciar sesión:', error);
    
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
