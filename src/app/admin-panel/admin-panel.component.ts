import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: true,  // Asegúrate de que el componente esté configurado como standalone
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  @Input() campId: number | undefined; // Recibe el campId como un input desde el componente padre
  
  user = {
    nombre: 'John',
    apellido: 'Doe',
    rut: '12345678-9',
    email: 'john.doe@example.com',
    password: 'password123',
  };

  saveChanges() {
    console.log('Información guardada:', this.user);
    console.log('Camp ID:', this.campId);  // Muestra el campId recibido
    alert('Los cambios han sido guardados con éxito.');
  }
}
