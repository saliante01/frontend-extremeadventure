import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';  // Asegúrate de importar el AuthService

@Injectable({
  providedIn: 'root',
})
export class PendingRegistrationsService {
  constructor(private http: HttpClient) {}

  // Método para obtener las inscripciones pendientes
  getPendingRegistrations(url: string): Observable<any> {
    return this.http.get<any>(url, { withCredentials: true }); // Realizamos la solicitud GET
  }
}