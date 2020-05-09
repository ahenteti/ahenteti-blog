import { OnInit, OnDestroy } from "@angular/core";
import { UserObservableService } from "../services/user-observable.service";
import { Subscription } from "rxjs";
import { IUser } from "../models/user.internal.models";

export class UserAwareComponent implements OnInit, OnDestroy {
  user: IUser;
  userAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private userObservableService: UserObservableService) {}

  ngOnInit() {
    this.onUserChange(this.userObservableService.userSource.getValue());
    this.userSubscription = this.userObservableService.currentUser.subscribe(
      (user) => this.onUserChange(user)
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  private onUserChange(user: IUser) {
    this.user = user;
    this.userAuthenticated = user != undefined;
  }
}
