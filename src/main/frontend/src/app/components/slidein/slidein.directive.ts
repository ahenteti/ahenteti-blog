import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appSlideIn]",
})
export class SlideInDirective {
  constructor(el: ElementRef) {
    el.nativeElement.setAttribute("data-aos", "fade-up");
    el.nativeElement.setAttribute("data-aos-duration", "800");
  }
}
