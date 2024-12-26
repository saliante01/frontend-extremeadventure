import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRegistrationsComponent } from './pending-registrations.component';

describe('PendingRegistrationsComponent', () => {
  let component: PendingRegistrationsComponent;
  let fixture: ComponentFixture<PendingRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingRegistrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
