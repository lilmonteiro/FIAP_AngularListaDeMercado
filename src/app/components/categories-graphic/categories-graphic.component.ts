import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'categories-graphic',
  imports: [ChartModule],
  templateUrl: './categories-graphic.component.html',
  styleUrl: './categories-graphic.component.scss'
})
export class CategoriesGraphComponent {
  data: any;
  options: any;

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.data = {
      labels: ['Feira', 'Limpeza', 'Alimentos', 'Bebidas', 'Frios e Lacticínios'],
      datasets: [
        {
          borderColor: 'transparent',
          data: [300, 50, 100, 50, 87],
          backgroundColor: [
            "#5AC86C",
            "#9747FF",
            "#D732A8",
            "#522504",
            "#2075FF"
          ],
        }
      ]
    };

    this.options = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            font:{
              size: 8
            },
            color: "#000",
            usePointStyle: true,
            pointStyle: 'circle',
          }
        }
      }
    };
  };

}
