import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";
import { Post } from "../../models/post.internal.models";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { SIMPLEMDE_OPTIONS } from "src/app/modules/markdown/simplemde.options";
import { NAVBAR_HEIGHT } from "src/app/modules/shared/services/constants.utils";

@Component({
  selector: "app-create-update-post-form",
  templateUrl: "./create-update-post-form.component.html",
  styleUrls: ["./create-update-post-form.component.scss"],
})
export class CreateUpdatePostFormComponent implements AfterViewInit {
  public simpleMdeOptions = SIMPLEMDE_OPTIONS;
  readonly separators: number[] = [ENTER, COMMA];
  @Input() pageTitle: string;
  @Input() post: Post;
  @Input() submitButtonLabel: string;
  @Output() public formSubmit = new EventEmitter<Post>();
  public previewMode = false;
  private editor: HTMLElement;
  private editorOffsetTop: number;

  ngAfterViewInit(): void {
    this.editor = document.querySelector("simplemde") as HTMLElement;
    this.editorOffsetTop = this.editor.offsetTop - NAVBAR_HEIGHT;
  }

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
