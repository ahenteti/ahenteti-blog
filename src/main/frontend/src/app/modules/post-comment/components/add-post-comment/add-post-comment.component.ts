import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserAwareComponent } from "src/app/modules/user/user-aware.component";
import { ICreatePostCommentApiRequest } from "../../models/post-comment.external.models";
import { UserObservable } from "src/app/modules/user/services/user.observable";

@Component({
  selector: "app-add-post-comment",
  templateUrl: "./add-post-comment.component.html",
  styleUrls: ["./add-post-comment.component.scss"],
})
export class AddPostCommentComponent extends UserAwareComponent {
  postId: number;
  @Output() submit = new EventEmitter<ICreatePostCommentApiRequest>();
  @ViewChild("commentTextarea", { static: false }) commentTextarea: ElementRef;

  constructor(route: ActivatedRoute, userObservable: UserObservable) {
    super(userObservable);
    this.postId = route.snapshot.params["id"];
  }

  onSubmit(form: NgForm) {
    this.submit.emit(form.value);
    this.commentTextarea.nativeElement.value = "";
  }
}
