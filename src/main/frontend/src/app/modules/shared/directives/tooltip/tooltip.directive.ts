import {
  Directive,
  Input,
  HostListener,
  OnInit,
  ComponentRef,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import {
  Overlay,
  OverlayRef,
  OverlayPositionBuilder,
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { TooltipComponent } from "./tooltip.component";

@Directive({
  selector: "[tooltip]",
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input("tooltip")
  private text = "";

  private overlayRef: OverlayRef;

  constructor(
    private elementRef: ElementRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: "center",
          originY: "bottom",
          overlayX: "center",
          overlayY: "top",
        },
      ]);
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  ngOnDestroy() {
    this.hide();
  }

  @HostListener("mouseenter")
  show() {
    // Create tooltip portal
    const tooltipPortal = new ComponentPortal(TooltipComponent);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(
      tooltipPortal
    );

    // Pass content to tooltip component instance
    tooltipRef.instance.text = this.text;
  }

  @HostListener("mouseleave")
  hide() {
    this.overlayRef.detach();
  }
}
