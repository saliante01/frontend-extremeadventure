import { Component } from '@angular/core';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IdInfo3inscriptionComponent } from "../id-info3inscription/id-info3inscription.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header-application-form',
  imports: [ApplicationFormComponent, NavbarComponent, IdInfo3inscriptionComponent,FooterComponent],
  templateUrl: './header-application-form.component.html',
  styleUrl: './header-application-form.component.css'
})
export class HeaderApplicationFormComponent {

}
