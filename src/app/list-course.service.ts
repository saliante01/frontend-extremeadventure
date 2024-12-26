import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCourseService {
  constructor(private http: HttpClient) {}

  // Método para obtener los registros de la semana
  getRegistrations(weekId: number): Observable<any[]> {
    const url = `https://wild-summer-camp.onrender.com/api/users/admin/week/${weekId}/registrations/`; // URL con el ID de semana
    return this.http.get<any[]>(url, { withCredentials: true }); // Realizamos la solicitud GET con credenciales
  }
}
