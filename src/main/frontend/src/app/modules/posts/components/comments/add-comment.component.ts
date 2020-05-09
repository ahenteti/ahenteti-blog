import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { IUser } from "src/app/modules/shared/models/user.internal.models";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { UserObservableService } from "src/app/modules/shared/services/user-observable.service";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"],
})
export class AddCommentComponent implements OnInit, OnDestroy {
  postId: number;
  user: IUser;
  userAuthenticated = false;
  private userSubscription: Subscription;

  constructor(
    route: ActivatedRoute,
    public userObservableService: UserObservableService
  ) {
    this.postId = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.onUserChange(this.userObservableService.userSource.getValue());
    this.userSubscription = this.userObservableService.currentUser.subscribe(
      (user) => this.onUserChange(user)
    );
  }

  private onUserChange(user: IUser) {
    this.user = user;
    this.userAuthenticated = user != undefined;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
