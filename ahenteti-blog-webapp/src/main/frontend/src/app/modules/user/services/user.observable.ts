import { Injectable } from "@angular/core";
import { AnonymousUser, CurrentUser } from "../models/user.internal.models";
import { BehaviorSubject, Observable } from "rxjs";
import { UserHttpClient } from "./user.http-client";
import { Router, NavigationEnd } from "@angular/router";

// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
@Injectable({ providedIn: "root" })
export class UserObservable {
  private subject = new BehaviorSubject<CurrentUser>(new AnonymousUser());

  constructor(private router: Router, private userHttpClient: UserHttpClient) {
    this.checkUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkUser();
      }
    });
  }

  private checkUser() {
    this.userHttpClient
      .getCurrentUser()
      .then((user) => this.newUser(user))
      .catch(() => this.handleGetCurrentUserErrorEvent());
  }

  private handleGetCurrentUserErrorEvent() {
    console.log("user not yet authenticated");
    this.newUser(new AnonymousUser());
  }

  currentUser(): CurrentUser {
    return this.subject.getValue();
  }

  onUser(): Observable<CurrentUser> {
    return this.subject.asObservable();
  }

  newUser(user: CurrentUser) {
    this.subject.next(user);
  }
}
