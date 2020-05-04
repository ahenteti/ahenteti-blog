import { Component, Input, OnInit } from "@angular/core";
import { IUser } from "../../models/user.internal.models";

@Component({
  selector: "app-user-avatar",
  template: `
    <div>
      <img [src]="user.avatarUrl" />
    </div>
  `,
  styleUrls: ["./user-avatar.component.scss"],
})
export class UserAvatarComponent {
  @Input() user: IUser;
}
