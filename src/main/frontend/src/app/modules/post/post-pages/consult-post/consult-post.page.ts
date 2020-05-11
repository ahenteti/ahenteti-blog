import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import {
  IPost,
  OfflinePost,
} from "../../post-shared/models/post.internal.models";
import { PostHttpServices } from "../../post-shared/services/post.http.services";

@Component({
  templateUrl: "./consult-post.page.html",
  styleUrls: ["./consult-post.page.scss"],
})
export class ConsultPostPage implements OnInit {
  postId: number;
  post: IPost;

  constructor(
    route: ActivatedRoute,
    private postHttpServices: PostHttpServices
  ) {
    this.postId = route.snapshot.params["id"];
    this.post = new OfflinePost();
  }

  ngOnInit(): void {
    this.postHttpServices
      .getPostById(this.postId)
      .then((post) => this.onLoadPost(post));
  }

  private onLoadPost(post: IPost) {
    this.post = post;
  }
}
