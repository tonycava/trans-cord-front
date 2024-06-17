import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/services/auth.service";
import { TokenService } from "../../core/services/token.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public error: string | null = null;

  public registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenService: TokenService) {
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form data:', this.registerForm.value);
      const user = await this.authService.register(this.registerForm.value as any).toPromise()
      this.tokenService.setToken(user?.data);
      location.assign("/");
      return;
    }
  }
}
