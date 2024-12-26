import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderActivityinfoComponent } from './header-activityinfo.component';

describe('HeaderActivityinfoComponent', () => {
  let component: HeaderActivityinfoComponent;
  let fixture: ComponentFixture<HeaderActivityinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderActivityinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderActivityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
