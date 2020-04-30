import { Component, Input } from "@angular/core";
import { IPost } from "../../models/post.internal.models";

@Component({
  selector: "app-post-title",
  templateUrl: "./post-title.component.html",
  styleUrls: ["./post-title.component.scss"],
})
export class PostTitleComponent {
  @Input()
  post: IPost;
}
