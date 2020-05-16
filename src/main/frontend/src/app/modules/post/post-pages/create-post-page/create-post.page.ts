import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, OnInit } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";
import {
  IPost,
  DefaultPost,
} from "../../post-shared/models/post.internal.models";
import { SIMPLEMDE_CONFIG } from "src/app/modules/shared/utils/constants.utils";
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
  readonly separators: number[] = [ENTER, COMMA];
  public previewMode = false;
  public post: IPost = new DefaultPost();
  public simpleMdeOptions = SIMPLEMDE_CONFIG;

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

  addTag(event: MatChipInputEvent): void {
    const value = event.value;
    if ((value || "").trim()) {
      this.post.tags.push(value.trim());
    }

    const input = event.input;
    if (input) {
      input.value = "";
    }
  }

  removeTag(tag: string): void {
    const index = this.post.tags.indexOf(tag);
    if (index >= 0) {
      this.post.tags.splice(index, 1);
    }
  }

  togglePreviewMode() {
    this.previewMode = !this.previewMode;
  }

  onSubmit() {
    this.postValidator.validate(this.post);
    this.showLoader();
    const request = this.postConverter.toCreatePostApiRequest(this.post);
    this.postHttpServices
      .createPost(request)
      .then((post) => {
        this.postsState.addPost(post);
        this.notifyUser();
        this.router.navigate(["/"]);
      })
      .finally(() => this.hideLoader());
  }

  private notifyUser() {
    this.alertService.info("Post added with success", {
      keepAfterRouteChange: true,
    });
  }
}
