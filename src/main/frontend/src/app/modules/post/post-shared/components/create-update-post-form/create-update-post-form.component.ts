import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IPost } from "../../models/post.internal.models";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { SIMPLEMDE_OPTIONS } from "src/app/modules/shared/utils/simplemde.utils";

@Component({
  selector: "app-create-update-post-form",
  templateUrl: "./create-update-post-form.component.html",
  styleUrls: ["./create-update-post-form.component.scss"],
})
export class CreateUpdatePostFormComponent {
  public simpleMdeOptions = SIMPLEMDE_OPTIONS;
  readonly separators: number[] = [ENTER, COMMA];
  @Input() pageTitle: string;
  @Input() post: IPost;
  @Output() public formSubmit = new EventEmitter<IPost>();
  public previewMode = false;

  togglePreviewMode() {
    this.previewMode = !this.previewMode;
  }

  onSubmit() {
    this.formSubmit.emit(this.post);
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
}
