import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { UserState } from '../../store/UserState';
import { Observable } from 'rxjs';
import { User } from '../../core/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Select(UserState.selectUser) user$!: Observable<User>;

}
