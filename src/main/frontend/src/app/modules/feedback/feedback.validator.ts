import { Feedback } from "./feedback.internal.model";
import { StringUtils } from "../shared/services/string.utils";
import { AlertService } from "../alert/alert.service";
import { Injectable } from "@angular/core";

@Injectable()
export class FeedbackValidator {
  constructor(private alertService: AlertService) {}

  validateFeedback(feedback: Feedback): boolean {
    const errors = [];
    if (StringUtils.isBlank(feedback.value)) {
      errors.push("Feedback title is mandatory");
    }
    if (errors.length > 0) this.alertService.error(errors.join("\n"));
    return errors.length === 0;
  }
}
