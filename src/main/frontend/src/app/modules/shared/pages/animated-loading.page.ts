import { ViewChild } from "@angular/core";
import { LoaderComponent } from "../components/loader/loader.component";

export class AnimatedLoadingPage {
  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;

  hideLoader() {
    this.loader.hide();
  }
}
