import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IPost } from "../../models/post.internal.models";
import { SIMPLEMDE_CONFIG } from "src/app/modules/shared/utils/constants.utils";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: "app-create-update-post-form",
  templateUrl: "./create-update-post-form.component.html",
  styleUrls: ["./create-update-post-form.component.scss"],
})
export class CreateUpdatePostFormComponent {
  public simpleMdeOptions = SIMPLEMDE_CONFIG;
  readonly separators: number[] = [ENTER, COMMA];
  @Input() post: IPost;
  @Output() public formSubmit = new EventEmitter<IPost>();

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
