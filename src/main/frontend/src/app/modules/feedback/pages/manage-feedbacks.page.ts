import { Component } from "@angular/core";
import { AbstractManageResourcesPage } from "../../shared/pages/manage-resources.page";
import { Feedback, FeedbacksPage } from "../models/feedback.internal.model";
import { FeedbackConverter } from "../services/feedback.converter";
import { FeedbackHttpServices } from "../services/feedback.http.services";
import { AlertService } from "../../alert/alert.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  templateUrl: "./manage-feedbacks.page.html",
  styleUrls: ["./manage-feedbacks.page.scss"],
})
export class ManageFeedbacksPage extends AbstractManageResourcesPage<Feedback> {
  constructor(
    private feedbackConverter: FeedbackConverter,
    private feedbackHttpServices: FeedbackHttpServices,
    private alertService: AlertService
  ) {
    super();
    this.currentPage = new FeedbacksPage();
    this.dataSource = new MatTableDataSource([]);
    this.columns = ["author", "createdAt", "feedback"];
  }

  // prettier-ignore
  fetchPage(filter: string, page: number) {
    const request  = this.feedbackConverter.toGetFeedbacksPageApiRequest(filter, page);
    this.feedbackHttpServices.getFeedbacksPage(request)
      .then(usersPage => this.handleFetchPageSuccessEvent(usersPage))
      .catch(error => this.handleGetFeedbacksPageErrorEvent(error));
  }

  private handleGetFeedbacksPageErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while fetching feedbacks :(");
  }
}
