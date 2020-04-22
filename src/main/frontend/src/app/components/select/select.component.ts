import {
  Component,
  Input,
  ViewChild,
  ContentChildren,
  QueryList,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { SelectDropdownComponent } from "./select-dropdown/select-dropdown.component";
import { SelectOptionComponent } from "./select-option/select-option.component";
import { SelectService } from "./select.service";
import { ISelectOption } from "src/app/models/internal/select-option.model";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  providers: [SelectService],
})
export class SelectComponent implements AfterViewInit {
  @Input()
  public selected: string;

  @Output()
  public change = new EventEmitter<ISelectOption>();

  public selectedOption: SelectOptionComponent;

  public selectedLabel: string;

  @ViewChild(SelectDropdownComponent, { static: true })
  public dropdown: SelectDropdownComponent;

  @ContentChildren(SelectOptionComponent)
  public options: QueryList<SelectOptionComponent>;

  constructor(private selectService: SelectService) {
    this.selectService.register(this);
  }

  public onSelectedOptionClick() {
    this.showDropdown();
  }

  public selectOption(option: SelectOptionComponent) {
    this.selected = option.value;
    this.selectedOption = option;
    this.selectedLabel = this.selectedOption ? this.selectedOption.label : "";
    this.hideDropdown();
    this.change.emit(this.createChangeEventValue(option));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectedOption = this.options
        .toArray()
        .find((option) => option.value === this.selected);
      this.selectedLabel = this.selectedOption ? this.selectedOption.label : "";
    });
  }

  private createChangeEventValue(option: SelectOptionComponent) {
    return {
      value: option.value,
      label: option.label ? option.label : option.value,
    };
  }

  private showDropdown() {
    this.dropdown.show();
  }

  private hideDropdown() {
    this.dropdown.hide();
  }
}
