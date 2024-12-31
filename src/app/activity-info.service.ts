import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityInfoService {
  constructor(private http: HttpClient) {}

  getScheduledActivities(weekId: number): Observable<any[]> {
    const url = `https://wild-summer-camp.onrender.com/api/week/${weekId}/scheduled_activities/`;
    return this.http.get<any[]>(url);
  }
}
