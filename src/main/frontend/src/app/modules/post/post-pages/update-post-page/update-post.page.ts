import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  OfflinePost,
  IPost,
  IPostSummary,
} from "../../post-shared/models/post.internal.models";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";
import { PostValidator } from "../../post-shared/services/post.validator";
import { PostConverter } from "../../post-shared/services/post.converter";
import { PostsState } from "../../post-shared/state/posts.state";
import { AlertService } from "src/app/modules/alert/alert.service";

@Component({
  templateUrl: "./update-post.page.html",
  styleUrls: ["./update-post.page.scss"],
})
export class UpdatePostPage extends AnimatedLoadingPage implements OnInit {
  postId: number;
  post = new OfflinePost();

  constructor(
    private postValidator: PostValidator,
    private postConverter: PostConverter,
    private postHttpServices: PostHttpServices,
    private postsState: PostsState,
    private alertService: AlertService,
    private router: Router,
    route: ActivatedRoute
  ) {
    super();
    this.postId = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.postHttpServices.getPostById(this.postId).then((post) => {
      this.post = post;
      this.hideLoader();
    });
  }

  onSubmit(post: IPost) {
    try {
      this.postValidator.validateUpdatePost(post);
      this.showLoader();
      const request = this.postConverter.toUpdatePostApiRequest(post);
      this.postHttpServices
        .updatePost(request)
        .then((post) => this.handleUpdatePostSuccessEvent(post))
        .catch((error) => this.handleUpdatePostErrorEvent(error))
        .finally(() => this.hideLoader());
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  private handleUpdatePostErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while updating your post :(");
  }

  private handleUpdatePostSuccessEvent(post: IPostSummary) {
    this.postsState.updatePost(post);
    this.alertService.info("Post updated with success", {
      keepAfterRouteChange: true,
    });
    this.router.navigate(["/posts"]);
  }
}
