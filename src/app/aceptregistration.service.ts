import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AceptregistrationService {
  constructor(private http: HttpClient) {}

  // Método para confirmar el registro con el ID
  confirmRegistration(registrationId: number): Observable<any> {
    const url = `https://wild-summer-camp.onrender.com/api/registration/${registrationId}/confirm/`; // URL con el ID de registro
    return this.http.patch(url, {}, { withCredentials: true }); // Enviamos una solicitud PATCH sin cuerpo
  }
}
