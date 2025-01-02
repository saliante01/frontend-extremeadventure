import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FormAdduserComponent } from "../form-adduser/form-adduser.component";
import { FooterComponent } from "../footer/footer.component";
import { PendingRegistrationsComponent } from "../pending-registrations/pending-registrations.component";
import { AceptRegistrationComponent } from "../acept-registration/acept-registration.component";
import { DeniedInscriptionComponent } from "../denied-inscription/denied-inscription.component";

@Component({
  selector: 'app-header-adduser',
  imports: [NavbarAdminComponent, FormAdduserComponent, FooterComponent, PendingRegistrationsComponent, AceptRegistrationComponent, DeniedInscriptionComponent],
  templateUrl: './header-adduser.component.html',
  styleUrl: './header-adduser.component.css'
})
export class HeaderAdduserComponent {

}
