import { Author } from "../../user/models/user.internal.models";
import { Page } from "../../shared/models/page.model";

export class Feedback {
  value = "";
  createdAt: Date;
  author: Author;
}

export class FeedbacksPage extends Page<Feedback> {}
