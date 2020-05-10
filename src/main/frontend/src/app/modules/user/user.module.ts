import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { UserLoginServices } from "./services/user.login.services";
import { UserObservable } from "./services/user.observable";
import { UserHttpServices } from "./services/user.http.services";
import { UserConverter } from "./converter/user.converter";

@NgModule({
  imports: [CommonModule],
  exports: [UserAvatarComponent],
  declarations: [UserAvatarComponent],
  providers: [
    UserHttpServices,
    UserLoginServices,
    UserObservable,
    UserConverter,
  ],
})
export class UserModule {}
