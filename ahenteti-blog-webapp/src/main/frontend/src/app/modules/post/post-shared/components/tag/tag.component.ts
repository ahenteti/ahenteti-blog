import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { PostsState } from "../../state/posts.state";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {
  constructor(private state: PostsState) {}

  @Input()
  public tag: string;

  @HostBinding("class.selected")
  public selected: boolean;

  // prettier-ignore
  ngOnInit(): void {
    this.state.selectedTag$.subscribe(selectedTag => {
      this.selected = this.tag == selectedTag;
    });
  }

  handleClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.state.selectTag(this.tag);
  }
}
