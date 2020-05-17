import { Component, Input } from "@angular/core";
import { KeyValue } from "@angular/common";
import {
  PostsByCategory,
  PostSummary,
} from "../../models/post.internal.models";

@Component({
  selector: "app-posts-by-category",
  templateUrl: "./posts-by-category.component.html",
  styleUrls: ["./posts-by-category.component.scss"],
})
export class PostsByCategoryComponent {
  @Input()
  public posts: PostsByCategory;

  postsOrder = (
    a: KeyValue<string, PostSummary[]>,
    b: KeyValue<string, PostSummary[]>
  ): number => {
    return b.value.length - a.value.length;
  };
}
