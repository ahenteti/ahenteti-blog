import { Component, Input, ViewChild, HostListener } from "@angular/core";
import { CdkPortal } from "@angular/cdk/portal";
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  OverlayPositionBuilder,
} from "@angular/cdk/overlay";
import {
  OVERLAY_POSITION_BOTTOM,
  OVERLAY_POSITION_TOP,
} from "src/utils/constants.utils";

@Component({
  selector: "app-select-dropdown",
  templateUrl: "./select-dropdown.component.html",
  styleUrls: ["./select-dropdown.component.scss"],
})
export class SelectDropdownComponent {
  @Input()
  public reference: HTMLElement;

  @ViewChild(CdkPortal, { static: true })
  public portal: CdkPortal;

  private overlayRef: OverlayRef;
  public showing = false;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private overlay: Overlay
  ) {}

  public show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.portal);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.showing = true;
  }

  public hide() {
    this.overlayRef.detach();
    this.showing = false;
  }

  @HostListener("window:resize")
  public onWinResize() {
    this.syncWidth();
  }

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }
    const referenceRect = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({ width: referenceRect.width });
  }

  getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.reference)
      .withPositions([OVERLAY_POSITION_BOTTOM, OVERLAY_POSITION_TOP]);
    return {
      positionStrategy,
      hasBackdrop: true,
      backdropClass: "cdk-overlay-transparent-backdrop",
    };
  }
}
