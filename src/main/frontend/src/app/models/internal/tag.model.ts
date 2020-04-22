import { ISelectOption } from "./select-option.model";

export class Tag implements ISelectOption {
  public value: string;
  public label: string;
  constructor(value: string, label?: string) {
    this.value = value;
    this.label = label || value;
  }
}
