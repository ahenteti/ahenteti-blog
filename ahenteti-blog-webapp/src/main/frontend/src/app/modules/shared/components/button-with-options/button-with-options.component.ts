import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-button-with-options",
  templateUrl: "./button-with-options.component.html",
  styleUrls: ["./button-with-options.component.scss"],
})
export class ButtonWithOptionsComponent {
  @Input()
  mainButtonLabel: string;

  @Output()
  mainButtonClick = new EventEmitter();

  mainButtonClickMethod() {
    this.mainButtonClick.emit();
  }
}
