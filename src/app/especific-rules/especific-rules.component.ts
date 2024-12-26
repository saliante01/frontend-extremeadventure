import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartProcessComponent } from "../start-process/start-process.component";

@Component({
  selector: 'app-especific-rules',
  imports: [CommonModule],
  templateUrl: './especific-rules.component.html',
  styleUrl: './especific-rules.component.css'
})
export class EspecificRulesComponent {
  faqList = [
    {
      question: 'Actividades Acuáticas (Kayak, SUP, Natación)',
      answers: [
        'Solo en áreas autorizadas: Los niños solo pueden participar en actividades acuáticas en las áreas designadas y bajo la supervisión de un monitor.',
        'Escuchar siempre las instrucciones de seguridad: Antes de entrar al agua, los niños deben escuchar cuidadosamente las instrucciones de seguridad dadas por los monitores.',
        'No correr ni empujarse cerca del agua: Para evitar accidentes, está prohibido correr, empujarse o hacer juegos bruscos cerca de las áreas acuáticas.',
        'Respetar los turnos y el espacio personal: En actividades como el kayak o el SUP, es importante respetar el espacio de los demás y esperar su turno para usar el equipo.'
      ],
      open: false
    },
    {
      question: 'Actividades Deportivas (Baloncesto)',
      answers: [
        'Juego limpio: Fomentar un ambiente de juego limpio, sin trampas ni actitudes despectivas hacia los demás.',
        'Respetar a los árbitros y entrenadores: Durante las actividades deportivas, es fundamental que los niños respeten las decisiones de los árbitros y los entrenadores, sin discusiones ni actitudes desafiantes.',
        'Comportarse de manera respetuosa con los demás jugadores: En todos los deportes, los niños deben aprender a respetar a sus compañeros, aceptando tanto los logros como las derrotas con madurez.'
      ],
      open: false
    },
    {
      question: 'Sanciones por Incumplimiento de Reglas',
      answers: [
        'Advertencia verbal: En caso de una infracción menor, se puede dar una advertencia verbal para recordarle al niño o adolescente las normas.',
        'Tiempo fuera o descanso: Si un niño continúa con una conducta inapropiada, puede ser necesario darle un “tiempo fuera” o una pausa en la actividad.',
        'Llamado a los padres: Si las infracciones continúan o son graves, se puede solicitar una reunión con los padres o tutores para discutir la situación y tomar medidas adicionales.',
        'Suspensión temporal o expulsión: En casos extremos de violencia, desobediencia repetida o comportamiento peligroso, un niño o adolescente podría ser suspendido temporalmente o expulsado de la escuela de verano.'
      ],
      open: false
    },
    {
      question: 'IMPORTANTE',
      answers: [
        '“Si un niño se inscribe y no va, no se hace devolución de la transacción del dinero”.',
        '“Si el niño se enferma, no podrá asistir a las actividades del cronograma y por lo tanto lamentablemente perdió su clase sin devolución de dinero”.'
      ],
      open: false
    }
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}
