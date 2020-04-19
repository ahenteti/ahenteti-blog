import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.scss"],
})
export class TagsComponent {
  @Input()
  public selectedTag: string;

  @Input()
  public tags: string[];

  @Output()
  public tagClick = new EventEmitter<string>();

  handleTagClickEvent(selectedTag) {
    this.tagClick.emit(selectedTag);
  }
}
