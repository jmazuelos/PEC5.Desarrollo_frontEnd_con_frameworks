import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  selectedOption: string = 'Inicio'; 

  selectOption(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
