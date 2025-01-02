import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeniedInscriptionService {
  constructor(private http: HttpClient) {}

  // Método para confirmar el registro con el ID
  confirmRegistration(registrationId: number): Observable<any> {
    const url = `https://wild-summer-camp.onrender.com/api/registrations/${registrationId}/delete/`; // URL con el ID de registro
    return this.http.delete(url, { withCredentials: true }); // Enviamos una solicitud PATCH sin cuerpo
  }
}
