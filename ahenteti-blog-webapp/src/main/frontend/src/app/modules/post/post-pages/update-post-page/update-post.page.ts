import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  OfflinePost,
  Post,
  PostSummary,
} from "../../post-shared/models/post.internal.models";
import { PostHttpClient } from "../../post-shared/services/post.http-client";
import { PostValidator } from "../../post-shared/services/post.validator";
import { PostConverter } from "../../post-shared/services/post.converter";
import { PostsState } from "../../post-shared/state/posts.state";
import { AlertService } from "src/app/modules/alert/alert.service";

@Component({
  templateUrl: "./update-post.page.html",
  styleUrls: ["./update-post.page.scss"],
})
export class UpdatePostPage implements OnInit {
  slug: string;
  post = new OfflinePost();

  constructor(
    private postValidator: PostValidator,
    private postConverter: PostConverter,
    private postHttpClient: PostHttpClient,
    private postsState: PostsState,
    private alertService: AlertService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.slug = route.snapshot.params["slug"];
  }

  ngOnInit(): void {
    this.postHttpClient.getPostBySlug(this.slug).then((post) => {
      this.post = post;
    });
  }

  onSubmit(post: Post) {
    try {
      this.postValidator.validateUpdatePost(post);
      const request = this.postConverter.toUpdatePostApiRequest(post);
      this.postHttpClient
        .updatePost(request)
        .then((post) => this.handleUpdatePostSuccessEvent(post))
        .catch((error) => this.handleUpdatePostErrorEvent(error));
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  private handleUpdatePostErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while updating your post :(");
  }

  private handleUpdatePostSuccessEvent(post: PostSummary) {
    this.postsState.updatePost(post);
    this.alertService.info("Post updated with success", {
      keepAfterRouteChange: true,
    });
    this.router.navigate(["/posts"]);
  }
}
