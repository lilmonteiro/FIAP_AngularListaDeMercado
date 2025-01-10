import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'custom-card',
  imports: [
    MatCardModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss'
})

export class CustomCardComponent {
}
