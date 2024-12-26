import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationformserviceService {

  private apiUrl = 'https://wild-summer-camp.onrender.com/api/registration/create';  // URL de la API

  constructor(private http: HttpClient) {}

  submitApplication(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
