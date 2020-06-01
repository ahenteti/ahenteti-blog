import { Directive, ElementRef, AfterViewInit } from "@angular/core";

@Directive({
  selector: "textarea",
})
export class TextareaDisableSpellCheckDirective {
  constructor(element: ElementRef) {
    element.nativeElement.setAttribute("spellcheck", "false");
  }
}
