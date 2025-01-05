import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patrocinadores',
  imports: [CommonModule, FormsModule],
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css']
})
export class PatrocinadoresComponent {
  sponsors = [
    { name: 'Patrocinador 1', logo: 'assets/kaufmanlogo2.jpg', website: 'https://www.kaufmann.cl' },
    { name: 'Patrocinador 2', logo: 'assets/Columbia-Logo.png', website: 'https://www.columbiachile.cl' },
  ];
}
