import { Component } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ecommerce';

  selectedOption: string = 'Inicio';

  handleOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
