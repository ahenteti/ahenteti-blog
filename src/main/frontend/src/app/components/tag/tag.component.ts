import {
  Component,
  Input,
  HostBinding,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {
  @Input()
  public selectedTag: string;

  @Input()
  public tag: string;

  @Output()
  public click = new EventEmitter<string>();

  @HostBinding("class.selected")
  public selected: boolean;

  ngOnInit(): void {
    this.selected = this.tag == this.selectedTag;
  }

  handleClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.click.emit(this.tag);
  }
}
