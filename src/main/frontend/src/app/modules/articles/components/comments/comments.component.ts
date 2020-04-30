import { Component, Input } from "@angular/core";
import { IComment, Comments } from "../../models/article.internal.models";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent {
  @Input()
  comments: Comments;
}
