import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { ArticlesState } from "../../state/articles.state";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {
  constructor(private state: ArticlesState) {}

  @Input()
  public tag: string;

  @HostBinding("class.selected")
  public selected: boolean;

  ngOnInit(): void {
    this.selected = this.tag == this.state.selectedTag;
  }

  handleClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.state.selectedTag = this.tag;
  }
}
