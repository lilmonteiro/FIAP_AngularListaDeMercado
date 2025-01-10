import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartGraphicComponent } from './cart-graphic.component';

describe('CartGraphicComponent', () => {
  let component: CartGraphicComponent;
  let fixture: ComponentFixture<CartGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
