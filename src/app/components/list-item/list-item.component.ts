import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-item',
  imports: [
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})

export class ListItemComponent {
  @Input() name!: string; // The name of the item
  @Input() category!: string; // The category of the item
  @Input() isSelected: boolean = false; // Whether the item is selected or not

  toggleSelection(): void {
    this.isSelected = !this.isSelected; // Toggle the selection state
  }
  
}