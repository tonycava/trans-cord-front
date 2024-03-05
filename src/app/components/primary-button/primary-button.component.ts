import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
})
export class PrimaryButtonComponent {
  @Input() type = 'button';
  @Input() className = '';
  @Output() btnClick = new EventEmitter(); // Event emitter for click events

  handleClick() {
    this.btnClick.emit('click'); // Emit an event when button is clicked
  }
}
