import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormsUpdateScheduleService {
  constructor(private http: HttpClient) {}

  updateForm(url: string, formData: any): Observable<any> {
    return this.http.put<any>(url, formData, { withCredentials: true }); // Cambiado a PUT
  }
}

