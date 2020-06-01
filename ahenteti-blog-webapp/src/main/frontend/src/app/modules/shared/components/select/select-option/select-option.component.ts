import { Component, Input, HostListener } from "@angular/core";
import { SelectComponent } from "../select.component";
import { SelectService } from "../select.service";

@Component({
  selector: "app-select-option",
  template: "{{ label }}",
  styleUrls: ["./select-option.component.scss"],
})
export class SelectOptionComponent {
  @Input()
  public value: string;

  @Input()
  public label: string;

  private select: SelectComponent;

  constructor(private selectService: SelectService) {
    this.select = this.selectService.getSelect();
  }

  @HostListener("click", ["$event"])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.select.selectOption(this);
  }
}
