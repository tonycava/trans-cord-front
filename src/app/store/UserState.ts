import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/User';

export class GetUser {
  static readonly type = '[User] Get User';
}

export type UserStateModel = {
  user: User | null;
}

@State<UserStateModel>({
  name: 'User',
  defaults: {
    user: null
  }
})
@Injectable()
export class UserState {

  constructor(private userService: UserService) {
  }

  @Action(GetUser)
  getUser(ctx: StateContext<UserStateModel>) {
    const user = this.userService.getUser();
    const state = ctx.getState();
    ctx.setState({ ...state, user });
  }

  @Selector([UserState])
  static selectUser(state: UserStateModel) {
    return state.user;
  }
}
