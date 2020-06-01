import { Component, Input } from "@angular/core";
import { User } from "../../models/user.internal.models";

@Component({
  selector: "app-user",
  template: `
    <img [src]="user.avatarUrl" />
    <span>{{ user.username }}</span>
  `,
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  @Input() user: User;
}
