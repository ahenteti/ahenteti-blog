import {
  Component,
  HostListener,
  HostBinding,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent {
  private hover = false;
  private focus = false;
  filter = "";
  @Output() onFilter = new EventEmitter<string>();
  @ViewChild("input", { static: true }) input: ElementRef;

  onSubmit() {
    this.onFilter.emit(this.filter);
    this.input.nativeElement.focus();
  }

  @HostBinding("class.active")
  public active: boolean = false;

  @HostListener("mouseover") onMouseHover() {
    this.hover = true;
    this.updateActiveStatus();
  }

  @HostListener("mouseout") onMouseOut() {
    this.hover = false;
    this.updateActiveStatus();
  }

  onBlur() {
    this.focus = false;
    this.updateActiveStatus();
  }

  onFocus() {
    this.focus = true;
    this.updateActiveStatus();
  }

  private updateActiveStatus() {
    this.active = this.hover || this.focus;
  }
}
