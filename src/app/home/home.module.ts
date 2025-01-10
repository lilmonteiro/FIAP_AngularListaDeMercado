import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardModule } from '../features/dashboard/dashboard.module';
import { ListModule } from '../features/list/list.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, DashboardModule, ListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
