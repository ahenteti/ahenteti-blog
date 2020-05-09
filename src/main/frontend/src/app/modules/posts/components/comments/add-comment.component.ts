import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { IUser } from "src/app/modules/shared/models/user.internal.models";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { UserObservableService } from "src/app/modules/shared/services/user-observable.service";
import { NgForm } from "@angular/forms";
import { ICommentApiRequest } from "../../models/post.external.models";
import { UserAwareComponent } from "src/app/modules/shared/components/user-aware.component";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"],
})
export class AddCommentComponent extends UserAwareComponent {
  postId: number;
  @Output() submit = new EventEmitter<ICommentApiRequest>();
  @ViewChild("commentTextarea", { static: false }) commentTextarea: ElementRef;

  constructor(
    route: ActivatedRoute,
    userObservableService: UserObservableService
  ) {
    super(userObservableService);
    this.postId = route.snapshot.params["id"];
  }

  onSubmit(form: NgForm) {
    this.submit.emit(form.value);
    this.commentTextarea.nativeElement.value = "";
  }
}
