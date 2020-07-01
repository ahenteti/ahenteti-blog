import { Component, OnInit } from "@angular/core";
import {
  Post,
  DefaultPost,
  PostSummary,
} from "../../post-shared/models/post.internal.models";
import { PostValidator } from "../../post-shared/services/post.validator";
import { PostConverter } from "../../post-shared/services/post.converter";
import { PostHttpClient } from "../../post-shared/services/post.http-client";
import { PostsState } from "../../post-shared/state/posts.state";
import { AlertService } from "src/app/modules/alert/alert.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "create-post.page.html",
  styleUrls: ["create-post.page.scss"],
})
export class CreatePostPage {
  public post: Post = new DefaultPost();

  constructor(
    private postValidator: PostValidator,
    private postConverter: PostConverter,
    private postHttpClient: PostHttpClient,
    private postsState: PostsState,
    private alertService: AlertService,
    private router: Router
  ) {}

  submit(post: Post) {
    this._submit(post);
  }

  submitAndPublish(post: Post) {
    this._submit(post, true);
  }

  _submit(post: Post, publish = false) {
    try {
      this.postValidator.validateCreatePost(post);
      const request = this.postConverter.toCreatePostApiRequest(post, publish);
      console.log(request);
      this.postHttpClient
        .createPost(request)
        .then((post) => this.handleCreatePostSuccessEvent(post))
        .catch((error) => this.handleCreatePostErrorEvent(error));
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  private handleCreatePostErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while creating your post :(");
  }

  private handleCreatePostSuccessEvent(post: PostSummary) {
    this.postsState.addPost(post);
    this.alertService.info("Post added with success", {
      keepAfterRouteChange: true,
    });
    this.router.navigate(["/posts"]);
  }
}
