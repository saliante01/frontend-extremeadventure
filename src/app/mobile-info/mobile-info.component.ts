import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from "../navbar-user/navbar-user.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-mobile-info',
  imports: [CommonModule, NavbarUserComponent, FooterComponent],
  templateUrl: './mobile-info.component.html',
  styleUrl: './mobile-info.component.css'
})
export class MobileInfoComponent {
  faqList = [
    {
      question: 'No puedo ver mis cursos en Android',
      answers: [
        'Actualmente la página web tiene respaldo para android en el navegador de Google Chrome, otros navegadores podrían sufrir problemas.',
      ],
      open: false
    },
    {
      question: 'No puedo ver mis cursos en IOS(Iphone)',
      answers: [
        'Algunos problemas comunes que se tienen con IOS que no permite acceder a tus cursos es el sistema de cookies, IOS bloquea automaticamente las cookie de nustro sitio web de forma preventiva despues de la actualización de software   IOS 16. ',
        'Para poder visualizar tu contenido en tu dispositivo IOS hay que seguir los siguientes pasos: ',
        '1. Dirigirse a Configuración',
        '2. Ir a Aplicaciones',
        '3. Buscar Safari',
        '4. Al bajar aparecerá una sección de privadida y seguridad',
        '5. Desactivar opción: Evitar el seguimiento entre sitios (Prevent Cross-Site Tracking)',
        '6. Despúes de salir de nuestro sitio web, puedes volver a activar esta opción',
        'Con esto podrás visualizar tus cursos, es importante recordar que solamente el contenido será visible por el navegador "Safari"',
      ],
      open: false
    },
    {
      question: 'Recomendaciones',
      answers: [
        'Para tener una mejor experiencia de usuario es recomendable la visualización del contenido en portatiles/PC',
      ],
      open: false
    },

  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}

