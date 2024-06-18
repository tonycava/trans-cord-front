import { booleanAttribute, Component, Input } from '@angular/core';
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
  @Input() type = 'text';
  @Input() title = '';
  @Input() name = '';
  @Input() value = '';
  @Input() class = '';
  @Input() placeholder = '';
  @Input({ transform: booleanAttribute }) readonly = false;
  id = crypto.randomUUID();
}
