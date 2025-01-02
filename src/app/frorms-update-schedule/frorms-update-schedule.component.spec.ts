import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrormsUpdateScheduleComponent } from './frorms-update-schedule.component';

describe('FrormsUpdateScheduleComponent', () => {
  let component: FrormsUpdateScheduleComponent;
  let fixture: ComponentFixture<FrormsUpdateScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrormsUpdateScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrormsUpdateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
