import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-camp-detail',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './camp-detail.component.html',
  styleUrls: ['./camp-detail.component.css'],
})
export class CampDetailComponent implements OnInit {
  daysOfWeek: string[] = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  // Nuevo objeto para mapear días con fechas
  dates: Record<string, string> = {};

  activities: Record<string, { title: string, time: string, location: string, requirements: string | null, activityId: number }[]> = {};

  colors: string[] = [
    '#0c347e', // Azul
    '#90ee90', // Verde claro
    '#dda0dd', // Morado claro
    '#add8e6', // Celeste claro
    '#006400', // Verde oscuro
    '#ffffe0', // Amarillo claro
    '#ffa07a', // Naranja claro
  ];

  currentIndex: number = 0;  // Índice para el desplazamiento del carrusel

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const campId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchActivities(campId);
    this.setDates(campId);  // Establecer las fechas según el campId
  }

  // Asignar las fechas según el campId
  setDates(campId: number): void {
    const baseDates: Record<number, string[]> = {
      1: ['6', '7', '8', '9', '10', '11', '12'],
      2: ['13', '14', '15', '16', '17', '18', '19'],
      4: ['20', '21', '22', '23', '24', '25', '26'],
    };
    
    const dates = baseDates[campId] || [];
    
    this.daysOfWeek.forEach((day, index) => {
      this.dates[day] = dates[index] || '';
    });
  }

  fetchActivities(campId: number): void {
    this.http
      .get<any[]>(`https://wild-summer-camp.onrender.com/api/week/${campId}/scheduled_activities/`)
      .subscribe((data) => {
        this.organizeActivitiesByDay(data);
      });
  }

  organizeActivitiesByDay(activities: any[]): void {
    const activitiesByDay: Record<string, { title: string, time: string, location: string, requirements: string | null, activityId: number }[]> = {
      'Lunes': [],
      'Martes': [],
      'Miércoles': [],
      'Jueves': [],
      'Viernes': [],
      'Sábado': [],
      'Domingo': [],
    };

    activities.forEach((activity) => {
      const date = new Date(activity.date);
      const dayOfWeek = this.daysOfWeek[date.getDay()];
      activitiesByDay[dayOfWeek].push({
        title: activity.activity_title,
        time: `${activity.start_time} - ${activity.end_time}`,
        location: activity.location,
        requirements: activity.requirements,
        activityId: activity.id,
      });
    });

    this.activities = activitiesByDay;
  }

  get carouselTransform(): string {
    const isMobile = window.innerWidth <= 768;
    const distancePerClick = isMobile ? 350 : 400;
    return `translateX(-${this.currentIndex * distancePerClick}px)`;
  }

  next(): void {
    if (this.currentIndex < this.daysOfWeek.length - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getCircleColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  getFormattedTimeRange(timeRange: string): string {
    const times = timeRange.split('-');
    const startTime = times[0].slice(0, 5);
    const endTime = times[1].slice(0, 6);
    return `${startTime} - ${endTime}`;
  }
}
