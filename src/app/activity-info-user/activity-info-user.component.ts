import { Component, Input, OnInit } from '@angular/core';
import { ActivityInfoService } from '../activity-info.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-activity-info-user',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './activity-info-user.component.html',
  styleUrls: ['./activity-info-user.component.css']
})
export class ActivityInfoUserComponent implements OnInit {
  @Input() weekId: number | undefined;
  activities: any[] = [];
  groupedActivities: { [key: string]: any[] } = {}; // Agrupación por fecha
  objectKeys = Object.keys; // Para iterar sobre las claves en el template

  constructor(private activitiesService: ActivityInfoService) {}

  ngOnInit(): void {
    if (this.weekId) {
      this.activitiesService.getScheduledActivities(this.weekId).subscribe(
        (data: any[]) => {
          this.activities = data;
          console.log('Actividades recibidas:', this.activities);
          this.groupedActivities = this.groupActivitiesByDate(this.activities);
          console.log('Actividades agrupadas por fecha:', this.groupedActivities);
        },
        (error) => {
          console.error('Error fetching scheduled activities', error);
        }
      );
    }
  }

  /**
   * Agrupa actividades por fecha.
   * @param activities Lista de actividades.
   * @returns Objeto con fechas como claves y actividades como valores.
   */
  private groupActivitiesByDate(activities: any[]): { [key: string]: any[] } {
    return activities.reduce((groups: { [key: string]: any[] }, activity) => {
      const date = activity.date; // Reemplaza 'date' con la clave correcta si es distinta
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(activity);
      return groups;
    }, {});
  }
}

