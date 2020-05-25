import {
  CreateFeedbackApiRequest,
  GetFeedbacksPageApiRequest,
  FeedbacksPageApiResponse,
} from "../models/feedback.external.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FeedbacksPage } from "../models/feedback.internal.model";
import { FeedbackConverter } from "./feedback.converter";
import { map } from "rxjs/operators";

@Injectable()
export class FeedbackHttpServices {
  constructor(
    private http: HttpClient,
    private feedbackConverter: FeedbackConverter
  ) {}

  // prettier-ignore
  createFeedback(request: CreateFeedbackApiRequest): Promise<void> {
    return this.http
      .post<void>(request.url, request.body)
      .toPromise();
  }

  // prettier-ignore
  getFeedbacksPage(request: GetFeedbacksPageApiRequest): Promise<FeedbacksPage> {
    return this.http
      .get<FeedbacksPageApiResponse>(request.url)
      .pipe(map((feedbacks) => this.feedbackConverter.toFeedbacksPage(feedbacks)))
      .toPromise();
  }
}
