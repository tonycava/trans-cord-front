import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../core/services/auth.service";
import { TokenService } from "../../core/services/token.service";

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenService: TokenService) {
  }

  async onSubmit() {
    if (this.loginForm?.valid) {
      console.log('Form data:', this.loginForm.value);
      const user = await this.authService.login(this.loginForm.value as any).toPromise()
      this.tokenService.setToken(user?.data);
      location.assign("/");
    }
  }

}
