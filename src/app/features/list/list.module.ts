import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CustomCardComponent } from "../../components/custom-card/custom-card.component";
import { ListHeaderComponent } from '../../components/list-header/list-header.component';
import { ListItemComponent } from '../../components/list-item/list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CustomCardComponent,
    ListHeaderComponent,
    ListItemComponent,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ListComponent]
})

export class ListModule { 

}
