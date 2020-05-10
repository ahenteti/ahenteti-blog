import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { User, AnonymousUser } from "../models/user.internal.models";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { UserHttpServices } from "./user.http.services";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
@Injectable({ providedIn: "root" })
export class UserObservable {
  private subject = new BehaviorSubject<User>(new AnonymousUser());

  constructor(
    private router: Router,
    private userHttpService: UserHttpServices
  ) {
    this.checkUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("route navigation event");
        this.checkUser();
      }
    });
  }

  private checkUser() {
    this.userHttpService
      .getUser()
      .then((user) => this.newUser(user))
      .catch((error) => console.log("user not yet authenticated"));
  }

  currentUser(): User {
    return this.subject.getValue();
  }

  onUser(): Observable<User> {
    return this.subject.asObservable();
  }

  newUser(user: User) {
    this.subject.next(user);
  }
}
