import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "loader.component.html",
  styleUrls: ["loader.component.scss"],
})
export class LoaderComponent {
  @HostBinding("class.fadeout")
  fadeout: boolean = false;

  hide() {
    setTimeout(() => (this.fadeout = true), 500);
  }
}
