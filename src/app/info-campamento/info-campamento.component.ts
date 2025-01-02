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
      question: 'Requisitos de la semana del 23 de Enero al 25 de Enero',
      answers: [
        'Requerimientos para campamento por niño(a):',
        'Carpa',
        'Saco de dormir y colchoneta',
        'Utiles de aseo(cepillo de dientes, pasta de diente, medicamentos según lo requiera, bloqueador, repelente para moscos, toalla, muda de ropa, calzado acorde para senderismo y hawaianas para descansar los pies y relajarse)',
        'Linterna'

      ],
      open: false
    },
    {
      question: 'Itinerario día 23 de Enero: Exploración, Diversión y Trabajo en Equipo',
      answers: [
        'Mañana: Llegada y Actividades de Integración:',
        'Salida de bus al Parque Huerquehue a las 9:00 AM( La convocatoria será previamente designada posiblemente Casona Pucón.',
        ' (“RESPETAR HORARIO DE SALIDA, NO SE ESPERARA A FUERA DE ESE HORARIO A UN PARTICIPANTE POR RESPETO A LOS QUE LLEGUEN EN EL HORARIO INDICADO Y  CRONOGRAMA ESTIPULADO CON LOS HORARIOS RESPECTIVOS DE LAS ACTIVIDADES”)',
        'Bienvenida y Juego de Presentación (15-20 minutos):',
        'Comienza el campamento con una dinámica de integración para que los participantes se conozcan. Algunas ideas incluyen:',
        '   Nombre y adjetivo: Cada niño o adolescente dice su nombre y un adjetivo que comience con la misma letra (por ejemplo, "Sofía la Simpática").',
        '   Red de nombres: Los participantes se sientan en círculo, y cada uno lanza una pelota mientras dice su nombre. El siguiente niño debe decir el nombre de la persona que le lanzó la pelota, y así sucesivamente.',
        'DESAYUNO: 10:30 AM ',
        'Caminata de Exploración:',
        'Después de la bienvenida, organiza una caminata en la naturaleza. Los niños pueden aprender sobre el entorno, la flora y la fauna local. Durante el recorrido, los monitores pueden contar historias de la región o hacer preguntas para fomentar la observación del entorno natural.',
        'ALMUERZO: Picnic en el Campo 14:30 A 15:00 HORAS',
        'Tarde: Actividades Físicas y Juegos en Equipo desde las 16:00 horas.',
        'Kayac y Sup: Se retroalimentara lo aprendido en las actividades diarias.',
        'Juegos en Equipo - Carreras de Obstáculos: Carrera de sacos/Arrastrarse bajo cuerdas/Saltos en zigzag. ',
        'CENA 19:30.',
        'CINE NOCTURNO: PELICULA FAMILIAR desde las 21:00 horas.',
        'TERMINADO EL CINE PREPARARSE PARA DESCANSAR.',
      ],
      open: false
    },

    {
      question: 'Información Desayuno, Almuerzo, Poste, y Cena , dia 23 de Enero',
      answers: [
        'Desayuno: café, Te, pan, cereal, leche chocolatada, leche normal, queso, jamón, galletas, jugo yogurt.',
        'Almuerzo: Consiste en: Tallarinata con salsas rojas, carne, pollo y espinacas',
        'Postre: frutas ',
      ],
      open: false
    },
    {
      question: 'Itinerario día 24 de Enero: Exploración, Diversión y Trabajo en Equipo',
      answers: [
        'DESAYUNO 9:00',
        'Caminata de exploración.',
        'ALMUERZO 14:00 ',
        'Actividades recreativas tarde a las 16:00 horas.',
        'Kayac y Sup',
        'OPTATIVO: Juegos en Equipo - Carreras de Obstaculos',
        'Taller de Supervivencia Básica(nudos de cuerda para atar, colgar una hamaca, etc.): Carrera de sacos/Saltos en zipzag',
        'CENA DE DESPEDIDA A LAS 20:00 HORAS',
        'Por la noche, organizamos una fogata y se invita a los niños a sentarse alrededor:Aquí pueden compartir historias, cantar canciones o escuchar cuentos contados por los monitores. Las historias pueden ser de aventura, miedo o mitológicas, dependiendo de la edad de los niños.',
        'Competencia de Talentos o Show de Campamento:Para finalizar el campamento de manera divertida, organiza un show de talentos donde los niños puedan presentar lo que más les gusta (bailes, canciones, trucos, etc.). Esto también les ayudará a ganar confianza en sí mismos y a fortalecer las relaciones con sus compañeros.',
        'Estrellas y Observación Nocturna: Si el lugar lo permite, organiza una sesión de observación de estrellas. Los niños pueden aprender sobre constelaciones. ',
        'Despedida',
        'Cierre del Campamento: Haz un círculo de despedida donde cada niño pueda compartir lo que más le gustó del campamento. Se entregara un pequeño obsequio simbólico (por ejemplo, una medalla, un diploma de "Explorador del Campamento", para que lo lleven consigo un recuerdo de la experiencia de su primer campamento de muchos en los cuales sin ninguna duda volverán a vivir la experiencias en nuestra escuela: Extreme Adventure Academy ',
      ],
      open: false
    },
    {
      question: 'Información Desayuno, Almuerzo, Poste, y Cena , dia 24 de Enero',
      answers: [
        'Desayuno: café, Te, pan, cereal, leche chocolatada, leche normal, queso, jamón, galletas, jugo yogurt.',
        'Almuerzo: Consiste en: Tallarinata con salsas rojas, carne, pollo y espinacas',
        'Postre: frutas ',
        'Cena:Consiste en hamburguesas de carne o vegetariana con jugo o bebidas.'
      ],
      open: false
    },

  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}
