import { Component, Input } from "@angular/core";
import { PostsGroup } from "../../models/post.internal.models";

@Component({
  selector: "app-posts-group",
  templateUrl: "./posts-group.component.html",
  styleUrls: ["./posts-group.component.scss"],
})
export class PostsGroupComponent {
  @Input()
  public postsGroup: PostsGroup;
}
