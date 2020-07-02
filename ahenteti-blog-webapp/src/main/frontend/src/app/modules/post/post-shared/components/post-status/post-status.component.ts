import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { PostStatus } from "../../models/post.internal.models";

@Component({
  selector: "app-post-status",
  templateUrl: "./post-status.component.html",
  styleUrls: ["./post-status.component.scss"],
})
export class PostStatusComponent implements OnInit {
  @Input()
  status: PostStatus;

  @HostBinding("class.wip")
  public wip: boolean = false;

  ngOnInit(): void {
    this.wip = this.status === PostStatus.WIP;
  }
}
