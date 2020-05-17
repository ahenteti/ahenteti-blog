import { Component, Input } from "@angular/core";
import { PostSummary } from "../../models/post.internal.models";

@Component({
  selector: "app-post-summary",
  templateUrl: "./post-summary.component.html",
  styleUrls: ["./post-summary.component.scss"],
})
export class PostSummaryComponent {
  @Input()
  post: PostSummary;
}
