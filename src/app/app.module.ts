import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { AuthComponent } from './layout/auth/auth.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { RedirectComponent } from './api/auth/discord/redirect/redirect.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './store/UserState';
import environment from './core/environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './core/interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrimaryButtonComponent,
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    InputFieldComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([UserState], {
      developmentMode: !environment.PRODUCTION
    })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
