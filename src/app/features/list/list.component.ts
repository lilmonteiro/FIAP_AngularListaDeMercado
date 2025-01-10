import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {
  
  items = [
    { name: 'Arroz', category: 'Alimentos', isSelected: false },
    { name: 'Limão', category: 'Feira', isSelected: true },
    { name: 'Leite', category: 'Bebidas', isSelected: false },
    { name: 'Abóbora', category: 'Feira', isSelected: true },
  ];

  toggleItemSelection(item: any): void {
    item.isSelected = !item.isSelected;
  }
}
