import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInfocampComponent } from './cart-infocamp.component';

describe('CartInfocampComponent', () => {
  let component: CartInfocampComponent;
  let fixture: ComponentFixture<CartInfocampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartInfocampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartInfocampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
