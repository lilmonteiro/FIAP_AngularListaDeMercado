import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesGraphComponent } from './categories-graphic.component';

describe('CategoriesGraphComponent', () => {
  let component: CategoriesGraphComponent;
  let fixture: ComponentFixture<CategoriesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
