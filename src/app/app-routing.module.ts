import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RedirectComponent } from './api/auth/discord/redirect/redirect.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { ProfileComponent } from "./pages/profile/profile.component";
import { ProfileEditComponent } from "./pages/profile/profile-edit/profile-edit.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'api/auth/discord/redirect',
    component: RedirectComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'edit',
        component: ProfileEditComponent
      }
    ]
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
