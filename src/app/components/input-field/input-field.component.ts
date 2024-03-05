import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  id = crypto.randomUUID();
}
