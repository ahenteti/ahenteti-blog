import { Component } from "@angular/core";
import { LoaderService } from "./loader.service";
import { Subject } from "rxjs";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-loader",
  templateUrl: "loader.component.html",
  styleUrls: ["loader.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":leave", [
        style({ opacity: 1 }),
        animate("800ms", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {}

  isLoading: Subject<boolean> = this.loaderService.isLoading;
}
