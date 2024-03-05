import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public error: string | null = null;
  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    if (this.loginForm?.valid) {
      console.log('Form data:', this.loginForm.value);
    } else {
      console.log(this.loginForm);
    }
  }


  onLogin() {
    console.log('test');
  }
}
