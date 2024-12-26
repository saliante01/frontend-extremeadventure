import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledActivitiesService {
  constructor(private http: HttpClient) {}

  getScheduledActivities(campId: number): Observable<any[]> {
    const url = `https://wild-summer-camp.onrender.com/api/week/${campId}/scheduled_activities/`;
    return this.http.get<any[]>(url);
  }
}
