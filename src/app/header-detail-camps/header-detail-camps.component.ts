import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CampDetailComponent } from '../camp-detail/camp-detail.component';
import { EspecificRulesComponent } from '../especific-rules/especific-rules.component';
import { StartProcessComponent } from '../start-process/start-process.component';
import { FooterComponent } from '../footer/footer.component';
import { InfoCampamentoComponent } from "../info-campamento/info-campamento.component";
import { CartInfocampComponent } from "../cart-infocamp/cart-infocamp.component";
import { CommonModule } from '@angular/common';
import { SnackinfoComponent } from "../snackinfo/snackinfo.component";

@Component({
  selector: 'app-header-detail-camps',
  imports: [NavbarComponent, CampDetailComponent, StartProcessComponent, FooterComponent, CartInfocampComponent, CommonModule, SnackinfoComponent],
  templateUrl: './header-detail-camps.component.html',
  styleUrls: ['./header-detail-camps.component.css']
})
export class HeaderDetailCampsComponent implements OnInit {
  campId: number = 0;  // Aquí almacenamos el id del campamento

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtenemos el ID de la ruta
    this.campId = +this.route.snapshot.paramMap.get('id')!;
  }
}
