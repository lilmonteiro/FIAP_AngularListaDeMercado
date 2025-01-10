import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CartGraphicComponent } from '../../components/cart-graphic/cart-graphic.component';
import { CategoriesGraphComponent } from '../../components/categories-graphic/categories-graphic.component';
import { CustomCardComponent } from "../../components/custom-card/custom-card.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CartGraphicComponent,
    CategoriesGraphComponent,
    CustomCardComponent
],
  exports: [DashboardComponent]
})
export class DashboardModule { }
