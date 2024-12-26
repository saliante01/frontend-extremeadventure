import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampService {
  private apiUrl = 'https://wild-summer-camp.onrender.com/api/camp/1/weeks';

  constructor(private http: HttpClient) {}

  getCampWeeks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
