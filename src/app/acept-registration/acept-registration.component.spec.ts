import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptRegistrationComponent } from './acept-registration.component';

describe('AceptRegistrationComponent', () => {
  let component: AceptRegistrationComponent;
  let fixture: ComponentFixture<AceptRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceptRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
