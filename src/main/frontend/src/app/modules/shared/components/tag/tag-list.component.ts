import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.scss"],
})
export class TagListComponent {
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
