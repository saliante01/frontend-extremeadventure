import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityInfoUserComponent } from './activity-info-user.component';

describe('ActivityInfoUserComponent', () => {
  let component: ActivityInfoUserComponent;
  let fixture: ComponentFixture<ActivityInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityInfoUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
