import { Directive, ElementRef, AfterViewInit } from "@angular/core";

@Directive({
  selector: "textarea",
})
export class TextareaAutoGrowDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    element.addEventListener("input", () => {
      const currentHeight = element.clientHeight;
      const scrollHeight = element.scrollHeight;
      if (currentHeight < scrollHeight) {
        element.style.height = scrollHeight + "px";
      }
    });
  }
}
