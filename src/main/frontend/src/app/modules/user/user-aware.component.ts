import { OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { UserObservable } from "./services/user.observable";
import { User } from "./models/user.internal.models";

export class UserAwareComponent implements OnInit, OnDestroy {
  user: User;
  private userSubscription: Subscription;

  constructor(private userObservable: UserObservable) {}

  ngOnInit() {
    this.user = this.userObservable.currentUser();
    this.userSubscription = this.userObservable
      .onUser()
      .subscribe((user) => (this.user = user));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
