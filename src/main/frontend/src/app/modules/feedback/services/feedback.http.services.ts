import { CreateFeedbackApiRequest } from "../models/feedback.external.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FeedbackHttpServices {
  constructor(private http: HttpClient) {}

  // prettier-ignore
  createFeedback(request: CreateFeedbackApiRequest): Promise<void> {
    return this.http
      .post<void>(request.url, request.body)
      .toPromise();
  }
}
