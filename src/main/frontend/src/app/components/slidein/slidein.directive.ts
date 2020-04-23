import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appSlideIn]",
})
export class SlideInDirective {
  constructor(el: ElementRef) {
    el.nativeElement.setAttribute("data-aos", "zoom-in-up");
    el.nativeElement.setAttribute("data-aos-anchor-placement", "bottom-bottom");
    el.nativeElement.setAttribute("data-aos-duration", "1200");
    el.nativeElement.setAttribute("data-aos-offset", "-300");
  }
}
