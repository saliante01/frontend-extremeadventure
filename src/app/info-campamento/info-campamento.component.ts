import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info-campamento',
  imports: [CommonModule],
  templateUrl: './info-campamento.component.html',
  styleUrl: './info-campamento.component.css'
})
export class InfoCampamentoComponent {
  faqList = [
    {
      question: 'Esta información corresponde unicamente a la semana del 23 de Enero al 25 de Enero',
      answers: [
        'Solo en áreas autorizadas: Los niños solo pueden participar en actividades acuáticas en las áreas designadas y bajo la supervisión de un monitor.',
        'Escuchar siempre las instrucciones de seguridad: Antes de entrar al agua, los niños deben escuchar cuidadosamente las instrucciones de seguridad dadas por los monitores.',
        'No correr ni empujarse cerca del agua: Para evitar accidentes, está prohibido correr, empujarse o hacer juegos bruscos cerca de las áreas acuáticas.',
        'Respetar los turnos y el espacio personal: En actividades como el kayak o el SUP, es importante respetar el espacio de los demás y esperar su turno para usar el equipo.'
      ],
      open: false
    },
    {
      question: 'Información Desayuno, Almuerzo, Poste, y Cena , dia 23 de Enero',
      answers: [
        'Desayuno: café, Te, pan, cereal, leche chocolatada, leche normal, queso, jamón, galletas, jugo yogurt.',
        'Almuerzo: Consiste en: Tallarinata con salsas rojas, carne, pollo y espinacas',
        'Postre: frutas ',
        '',
      ],
      open: false
    },
    {
      question: 'Información Desayuno, Almuerzo, Poste, y Cena , dia 24 de Enero',
      answers: [
        'Desayuno: café, Te, pan, cereal, leche chocolatada, leche normal, queso, jamón, galletas, jugo yogurt.',
        'Almuerzo: Consiste en: Tallarinata con salsas rojas, carne, pollo y espinacas',
        'Postre: frutas ',
      ],
      open: false
    },

  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}
