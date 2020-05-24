import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-manage-resources-page-layout",
  templateUrl: "./manage-resources-page.layout.html",
  styleUrls: ["./manage-resources-page.layout.scss"],
})
export class ManageResourcesPageLayout {
  @Input() pageTitle: string;
  @Input() previousButtonCssClasses: string;
  @Input() nextButtonCssClasses: string;

  @Output() previousButtonClick = new EventEmitter<void>();
  @Output() nextButtonClick = new EventEmitter<void>();
  @Output() filter = new EventEmitter<string>();

  handlePreviousButtonClickEvent() {
    this.previousButtonClick.next();
  }

  handleNextButtonClickEvent() {
    this.nextButtonClick.next();
  }

  onFilter(filter: string) {
    this.filter.emit(filter);
  }
}
