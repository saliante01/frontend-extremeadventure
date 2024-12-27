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
  isLoading = false; // Variable para el estado de carga
  formData = {
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    patologica: 'false', // Valor inicial como string
    weeks: [] as number[],
  };

  weekOptions: number[] = [1, 2, 3, 4];
  errorMessage: string | null = null;

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
      this.errorMessage = null;
      this.isLoading = true; // Inicia el estado de carga

      const applicationData = {
        registration_name: this.formData.nombre, // Nombre del usuario
        email: this.formData.email, // Correo electrónico
        rut: this.formData.rut, // RUT del usuario
        phone_number: this.formData.telefono, // Número telefónico
        medical_condition: this.formData.patologica === 'true', // Convierte la cadena a booleano
        weeks: this.formData.weeks, // Semanas seleccionadas
      };

      this.applicationformserviceService.submitApplication(applicationData).subscribe(
        (response) => {
          console.log('Formulario enviado:', response);
          this.isLoading = false; // Termina el estado de carga
          alert('Formulario enviado correctamente');
          form.reset();
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          this.isLoading = false; // Termina el estado de carga

          if (error.status === 400) {
            this.errorMessage =
              'Error en la creación de la solicitud. Correo no encontrado en el sistema o Intenta solicitar un curso en el que ya esta inscrito';
            form.reset();
          } else if (error.status === 500) {
            this.errorMessage =
              'Error con el servidor, por favor inténtelo más tarde.';
            form.reset();
          } else {
            this.errorMessage =
              'Ocurrió un error inesperado, por favor inténtelo más tarde.';
            form.reset();
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
