import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  id = crypto.randomUUID();
}
