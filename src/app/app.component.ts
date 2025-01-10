import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'AngularListaDeMercado';
}
