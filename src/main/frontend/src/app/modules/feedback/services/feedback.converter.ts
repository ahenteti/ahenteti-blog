import { Feedback, FeedbacksPage } from "../models/feedback.internal.model";
import { Injectable } from "@angular/core";
import {
  FeedbacksPageApiResponse,
  FeedbackApiResponse,
  GetFeedbacksPageApiRequest,
} from "../models/feedback.external.model";
import { UserConverter } from "../../user/services/user.converter";

@Injectable()
export class FeedbackConverter {
  constructor(private userConverter: UserConverter) {}

  toGetFeedbacksPageApiRequest(
    filter: string,
    page: number,
    size = 5,
    sortBy = "CREATED_AT",
    sortDirection = "desc"
  ): GetFeedbacksPageApiRequest {
    return {
      url: `/secure-api/feedbacks?filter=${filter}&page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
    };
  }

  toCreateFeedbackApiRequest(feedback: Feedback) {
    return {
      url: "/secure-api/feedbacks",
      body: {
        value: feedback.value,
      },
    };
  }

  toFeedback(feedback: FeedbackApiResponse): Feedback {
    const res = new Feedback();
    res.value = feedback.value;
    res.createdAt = new Date(feedback.createdAtIso8601);
    res.author = this.userConverter.toAuthor(feedback.author);
    return res;
  }

  toFeedbacksPage(page: FeedbacksPageApiResponse): FeedbacksPage {
    const res = new FeedbacksPage();
    res.totalItems = page.totalItems;
    res.firstPage = page.page == 0;
    res.lastPage = page.lastPage;
    res.page = page.page;
    page.items.forEach((feedback) => res.items.push(this.toFeedback(feedback)));
    return res;
  }
}
