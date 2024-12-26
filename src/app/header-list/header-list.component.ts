import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { ListCourseComponent } from "../list-course/list-course.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header-list',
  imports: [ListCourseComponent, FooterComponent, NavbarAdminComponent],
  templateUrl: './header-list.component.html',
  styleUrl: './header-list.component.css'
})
export class HeaderListComponent {

}
