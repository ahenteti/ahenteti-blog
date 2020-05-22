import { Injectable } from "@angular/core";
import {
  Author,
  AnonymousUser,
  CurrentUser,
} from "../models/user.internal.models";
import { BehaviorSubject, Observable } from "rxjs";
import { UserHttpServices } from "./user.http.services";
import { Router, NavigationEnd } from "@angular/router";

// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
@Injectable({ providedIn: "root" })
export class UserObservable {
  private subject = new BehaviorSubject<CurrentUser>(new AnonymousUser());

  constructor(
    private router: Router,
    private userHttpService: UserHttpServices
  ) {
    this.checkUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkUser();
      }
    });
  }

  private checkUser() {
    this.userHttpService
      .getCurrentUser()
      .then((user) => this.newUser(user))
      .catch((error) => console.log("user not yet authenticated"));
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
