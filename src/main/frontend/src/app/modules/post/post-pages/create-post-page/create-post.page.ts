import { Component, OnInit } from "@angular/core";
import {
  IPost,
  DefaultPost,
  IPostSummary,
} from "../../post-shared/models/post.internal.models";
import { PostValidator } from "../../post-shared/services/post.validator";
import { PostConverter } from "../../post-shared/services/post.converter";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";
import { PostsState } from "../../post-shared/state/posts.state";
import { AlertService } from "src/app/modules/alert/alert.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "create-post.page.html",
  styleUrls: ["create-post.page.scss"],
})
export class CreatePostPage extends AnimatedLoadingPage implements OnInit {
  public post: IPost = new DefaultPost();

  constructor(
    private postValidator: PostValidator,
    private postConverter: PostConverter,
    private postHttpServices: PostHttpServices,
    private postsState: PostsState,
    private alertService: AlertService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.hideLoader();
  }

  onSubmit(post: IPost) {
    try {
      this.postValidator.validateCreatePost(post);
      this.showLoader();
      const request = this.postConverter.toCreatePostApiRequest(post);
      this.postHttpServices
        .createPost(request)
        .then((post) => this.handleCreatePostSuccessEvent(post))
        .catch((error) => this.handleCreatePostErrorEvent(error))
        .finally(() => this.hideLoader());
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  private handleCreatePostErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while creating your post :(");
  }

  private handleCreatePostSuccessEvent(post: IPostSummary) {
    this.postsState.addPost(post);
    this.alertService.info("Post added with success", {
      keepAfterRouteChange: true,
    });
    this.router.navigate(["/posts"]);
  }
}
