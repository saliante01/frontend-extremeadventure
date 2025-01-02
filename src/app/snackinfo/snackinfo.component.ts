import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackinfo',
  imports: [],
  templateUrl: './snackinfo.component.html',
  styleUrl: './snackinfo.component.css'
})
export class SnackinfoComponent implements OnInit {

  // Arreglo de campamentos, puedes personalizar esta data como desees
  campDetails = [
    {
      title: 'Campamento de Verano A',
      description: 'Una experiencia increíble de verano con actividades acuáticas.',
      price: 120000,
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      activities: [
        { name: 'Kayak', description: 'Explora el lago en kayak.' },
        { name: 'Trekking', description: 'Senderismo en la montaña.' }
      ]
    },
    {
      title: 'Campamento de Verano B',
      description: 'Aventura en la naturaleza con actividades extremas.',
      price: 150000,
      startDate: '2025-07-01',
      endDate: '2025-07-31',
      activities: [
        { name: 'Ciclismo', description: 'Recorridos en bicicleta por senderos naturales.' },
        { name: 'Kayak', description: 'Aventuras en kayak en el río.' }
      ]
    },
    {
      title: 'Campamento de Invierno A',
      description: 'Vive el invierno en las montañas, con deportes de nieve.',
      price: 200000,
      startDate: '2025-08-01',
      endDate: '2025-08-31',
      activities: [
        { name: 'Esquí', description: 'Deslízate por las mejores pistas de esquí.' },
        { name: 'Snowboard', description: 'Practica snowboard en el snowpark.' }
      ]
    },
    {
      title: 'Campamento de Invierno B',
      description: 'Escapada invernal para disfrutar del frío y la nieve.',
      price: 180000,
      startDate: '2025-09-01',
      endDate: '2025-09-30',
      activities: [
        { name: 'Trekking en la nieve', description: 'Caminatas por senderos cubiertos de nieve.' },
        { name: 'Ciclismo de invierno', description: 'Recorridos en bicicleta adaptada para nieve.' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica adicional si es necesario
  }

}
