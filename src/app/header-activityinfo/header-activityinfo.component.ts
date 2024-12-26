import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivityInfoUserComponent } from '../activity-info-user/activity-info-user.component';
@Component({
  selector: 'app-header-activityinfo',
  imports: [NavbarUserComponent,FooterComponent,ActivityInfoUserComponent],
  templateUrl: './header-activityinfo.component.html',
  styleUrl: './header-activityinfo.component.css'
})
export class HeaderActivityinfoComponent implements OnInit {
  weekId: number | undefined; // Variable para almacenar el ID del campamento

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén el parámetro 'id' de la ruta
    this.weekId = Number(this.route.snapshot.paramMap.get('id')); // Convertimos el ID a un número
    console.log('Camp ID recibido:', this.weekId); // Verifica que el ID sea el esperado
  }
}
