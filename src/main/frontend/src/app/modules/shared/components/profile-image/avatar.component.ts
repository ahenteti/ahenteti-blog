import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-avatar",
  template: `
    <span [ngStyle]="getAvatarColor()">{{ username | firstletter }}</span>
  `,
  styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent {
  @Input() username: string;

  static colors = [
    "#2196F3",
    "#32c787",
    "#00BCD4",
    "#ff5652",
    "#ffc107",
    "#ff85af",
    "#FF9800",
    "#39bbb0",
  ];

  getAvatarColor() {
    var hash = 0;
    for (var i = 0; i < this.username.length; i++) {
      hash = 31 * hash + this.username.charCodeAt(i);
    }
    var index = Math.abs(hash % AvatarComponent.colors.length);
    return { "background-color": AvatarComponent.colors[index] };
  }
}
