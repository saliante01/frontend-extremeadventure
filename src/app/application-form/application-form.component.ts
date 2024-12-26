import { Component, OnInit } from '@angular/core';
import { ApplicationformserviceService } from '../aplicationformservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent implements OnInit {
  formData = {
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    patologica: false,
    weeks: [] as number[],
  };

  weekOptions: number[] = [1, 2, 3, 4, 5, 6];
  errorMessage: string | null = null; // Propiedad para almacenar mensajes de error

  constructor(
    private applicationformserviceService: ApplicationformserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: any): void {
    if (
      this.formData.nombre &&
      this.formData.rut &&
      this.formData.email &&
      this.formData.telefono &&
      this.formData.weeks.length > 0
    ) {
      this.errorMessage = null; // Limpiar mensaje de error previo

      const applicationData = {
        name: this.formData.nombre,
        email: this.formData.email,
        rut: this.formData.rut,
        phone_number: this.formData.telefono,
        medical_condition: this.formData.patologica,
        weeks: this.formData.weeks,
      };

      this.applicationformserviceService.submitApplication(applicationData).subscribe(
        (response) => {
          console.log('Formulario enviado:', response);
          form.reset();
          alert("Formulario enviado correctamente");
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);

          // Manejar diferentes códigos de error
          if (error.status === 400) {
            this.errorMessage = 'Correo no registrado en la plataforma, por favor regístrese.';
          } else if (error.status === 500) {
            this.errorMessage = 'Error con el servidor, por favor inténtelo más tarde.';
          } else {
            this.errorMessage = 'Ocurrió un error inesperado, por favor inténtelo más tarde.';
          }
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }

  onWeekChange(week: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.formData.weeks.push(week);
    } else {
      const index = this.formData.weeks.indexOf(week);
      if (index > -1) {
        this.formData.weeks.splice(index, 1);
      }
    }
  }
}
