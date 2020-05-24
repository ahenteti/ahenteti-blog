import { Component, HostBinding, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements AfterViewInit {
  @HostBinding("class.active")
  public active: boolean = false;
  public feedback: string = "";

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    document.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).closest(".feedback-container")) return;
      this.active = false;
    });
  }

  handleFeedbackIconClick(event) {
    event.stopPropagation();
    this.active = true;
  }

  cancelFeedback() {
    this.active = false;
  }
}
