import { Component, HostBinding, AfterViewInit } from "@angular/core";
import { UserAwareComponent } from "../user/components/user-aware.component";
import { UserObservable } from "../user/services/user.observable";
import { FeedbackConverter } from "./feedback.converter";
import { FeedbackHttpServices } from "./feedback.http.services";
import { Feedback } from "./feedback.internal.model";
import { FeedbackValidator } from "./feedback.validator";
import { AlertService } from "../alert/alert.service";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent extends UserAwareComponent
  implements AfterViewInit {
  @HostBinding("class.active")
  public active: boolean = false;
  public feedback: Feedback = new Feedback();

  constructor(
    userObservable: UserObservable,
    private feedbackValidator: FeedbackValidator,
    private feedbackConverter: FeedbackConverter,
    private feedbackHttpServices: FeedbackHttpServices,
    private alertService: AlertService
  ) {
    super(userObservable);
  }

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

  cancel() {
    this.active = false;
  }

  // prettier-ignore
  submit() {
    if (this.feedbackValidator.validateFeedback(this.feedback)) {
      const request = this.feedbackConverter.toCreateFeedbackApiRequest(this.feedback);
      this.feedbackHttpServices.createFeedback(request)
        .then(() => this.handleCreateFeedbackSuccessEvent())
        .catch(error => this.handleCreateFeedbackErrorEvent());
    }
  }

  private handleCreateFeedbackErrorEvent(): any {
    this.alertService.error("Error while sending your feedback :(");
  }

  private handleCreateFeedbackSuccessEvent(): any {
    this.active = false;
    this.feedback.value = "";
    this.alertService.info("Thank your for your feedback :)");
  }
}
