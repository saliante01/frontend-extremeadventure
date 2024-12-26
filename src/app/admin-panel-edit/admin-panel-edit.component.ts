import { Component, Input, OnInit } from '@angular/core';
import { ScheduledActivitiesService } from '../scheduled-activities.service'; // Asegúrate de importar el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-panel-edit',
  imports: [CommonModule],
  templateUrl: './admin-panel-edit.component.html',
  styleUrls: ['./admin-panel-edit.component.css']
})
export class AdminPanelEditComponent implements OnInit {
  @Input() campId: number | undefined;
  activities: any[] = [];
  groupedActivities: { [key: string]: any[] } = {}; // Agrupación por fecha
  objectKeys = Object.keys; // Para iterar sobre las claves en el template

  constructor(private activitiesService: ScheduledActivitiesService) {}

  ngOnInit(): void {
    if (this.campId) {
      this.activitiesService.getScheduledActivities(this.campId).subscribe(
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
