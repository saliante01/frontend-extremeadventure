import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedInscriptionComponent } from './denied-inscription.component';

describe('DeniedInscriptionComponent', () => {
  let component: DeniedInscriptionComponent;
  let fixture: ComponentFixture<DeniedInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeniedInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeniedInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
