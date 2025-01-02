import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminPanelEditComponent } from '../admin-panel-edit/admin-panel-edit.component';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FooterComponent } from "../footer/footer.component";
import { FormEditWeekComponent } from "../form-edit-week/form-edit-week.component";
import { FrormsUpdateScheduleComponent } from "../frorms-update-schedule/frorms-update-schedule.component";


@Component({
  selector: 'app-header-edit-camp',
  standalone: true,
  imports: [AdminPanelEditComponent, NavbarAdminComponent, FooterComponent, FrormsUpdateScheduleComponent],
  templateUrl: './header-edit-camp.component.html',
  styleUrls: ['./header-edit-camp.component.css']
})
export class HeaderEditCampComponent implements OnInit {
  campId: number | undefined; // Variable para almacenar el ID del campamento

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén el parámetro 'id' de la ruta
    this.campId = Number(this.route.snapshot.paramMap.get('id')); // Convertimos el ID a un número
    console.log('Camp ID recibido:', this.campId); // Verifica que el ID sea el esperado
  }
}
