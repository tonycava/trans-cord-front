import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Select } from "@ngxs/store";
import { UserState } from "../../../store/UserState";
import { Observable } from "rxjs";
import { User } from "../../../core/models/User";
import { toSignal } from "@angular/core/rxjs-interop";
import { ProfileService } from "../../../core/services/profile.service";
import { TokenService } from "../../../core/services/token.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent {

  @Select(UserState.selectUser) private user$!: Observable<User>;
  user = toSignal(this.user$);

  profileEditForm = this.formBuilder.group({
    username: [this.user()?.username ?? "", Validators.required],
    discordId: [this.user()?.discordId ?? ""],
  });

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private tokenService: TokenService) {
  }

  async onSubmit() {
    if (this.profileEditForm.valid) {
      const res = await this.profileService.editProfile(this.profileEditForm.value).toPromise();

      if (!res?.data) {
        this.tokenService.remoteToken();
        location.assign("/");
        return
      }

      this.tokenService.setToken(res?.data)
    }
  }
}
