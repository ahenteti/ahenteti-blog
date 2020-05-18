import {
  Component,
  Input,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { PostsState } from "../../state/posts.state";

@Component({
  selector: "app-search-posts",
  templateUrl: "./search-posts.component.html",
  styleUrls: ["./search-posts.component.scss"],
})
export class SearchPostsComponent {
  constructor(private postState: PostsState) {}

  @Input()
  public selectedTag: string;

  @Input()
  public tags: string[];

  @Input()
  public inputChangeDelay = 500;

  @Output()
  public inputChange = new EventEmitter<string>();

  public inputFocus: boolean;
  public mouseHover: boolean;

  @HostBinding("class.active")
  public active: boolean;

  @HostListener("mouseover")
  onMouseHover() {
    this.mouseHover = true;
    this.updateActiveState();
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.mouseHover = false;
    this.updateActiveState();
  }

  onInputFocus() {
    this.inputFocus = true;
    this.updateActiveState();
  }

  onInputBlur() {
    this.inputFocus = false;
    this.updateActiveState();
  }

  private timer = 0;
  onInputKeyup(event) {
    clearTimeout(this.timer);
    this.timer = window.setTimeout(
      () => this.inputChange.emit(event.target.value),
      this.inputChangeDelay
    );
  }

  onTagSelection(event: MatSelectChange) {
    this.postState.selectTag(event.value);
  }

  private updateActiveState() {
    this.active = this.mouseHover || this.inputFocus;
  }
}
