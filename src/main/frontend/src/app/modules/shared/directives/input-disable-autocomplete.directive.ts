import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "input",
})
export class InputDisableAutoCompleteDirective {
  constructor(el: ElementRef) {
    el.nativeElement.setAttribute("autocomplete", "off");
  }
}
