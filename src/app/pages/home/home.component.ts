import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { UserState } from '../../store/UserState';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '../../core/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Select(UserState.selectUser) private user$!: Observable<User>;
  user = toSignal(this.user$);

}
