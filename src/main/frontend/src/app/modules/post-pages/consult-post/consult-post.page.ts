import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { IPost, OfflinePost } from "../../post/models/post.internal.models";
import { PostHttpServices } from "../../post/services/post.http.services";

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
      .pipe(first())
      .subscribe((post) => this.onLoadPost(post));
  }

  private onLoadPost(post: IPost) {
    this.post = post;
  }
}
