import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesService {
  constructor(private http: HttpClient) {}

  // Método para obtener las semanas registradas del usuario
  getRegisteredWeeks(url: string): Observable<any[]> {
    return this.http.get<any[]>(url, { withCredentials: true });
  }
}
