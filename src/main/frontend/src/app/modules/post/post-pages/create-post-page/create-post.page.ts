import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";
import { NgForm } from "@angular/forms";
import {
  IPost,
  DefaultPost,
} from "../../post-shared/models/post.internal.models";
import { SIMPLEMDE_CONFIG } from "src/app/modules/shared/utils/constants.utils";

@Component({
  templateUrl: "create-post.page.html",
  styleUrls: ["create-post.page.scss"],
})
export class CreatePostPage {
  readonly separators: number[] = [ENTER, COMMA];
  public previewMode = false;
  public post: IPost = new DefaultPost();
  public simpleMdeOptions = SIMPLEMDE_CONFIG;

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
    console.log(this.post.bodyMarkdown);
  }

  onSubmit(form: NgForm) {}
}
