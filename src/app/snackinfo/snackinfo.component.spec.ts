import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackinfoComponent } from './snackinfo.component';

describe('SnackinfoComponent', () => {
  let component: SnackinfoComponent;
  let fixture: ComponentFixture<SnackinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
