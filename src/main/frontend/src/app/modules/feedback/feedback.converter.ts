import { Feedback } from "./feedback.internal.model";
import { Injectable } from "@angular/core";

@Injectable()
export class FeedbackConverter {
  toCreateFeedbackApiRequest(feedback: Feedback) {
    return {
      url: "/secure-api/feedbacks",
      body: {
        value: feedback.value,
      },
    };
  }
}
