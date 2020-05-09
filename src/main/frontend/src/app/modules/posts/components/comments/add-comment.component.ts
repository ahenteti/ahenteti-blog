import { Component, Input } from "@angular/core";
import { IUser } from "src/app/modules/shared/models/user.internal.models";
import { UserState } from "src/app/modules/shared/state/user.state";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"],
})
export class AddCommentComponent {
  postId: number;

  constructor(route: ActivatedRoute, public userState: UserState) {
    this.postId = route.snapshot.params["id"];
  }
}
