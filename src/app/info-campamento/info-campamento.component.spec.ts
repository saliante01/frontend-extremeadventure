import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCampamentoComponent } from './info-campamento.component';

describe('InfoCampamentoComponent', () => {
  let component: InfoCampamentoComponent;
  let fixture: ComponentFixture<InfoCampamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCampamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCampamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
