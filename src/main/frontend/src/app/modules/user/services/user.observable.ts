import { Injectable } from "@angular/core";
import { Author, AnonymousUser } from "../models/user.internal.models";
import { BehaviorSubject, Observable } from "rxjs";
import { UserHttpServices } from "./user.http.services";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";

// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
@Injectable({ providedIn: "root" })
export class UserObservable {
  private subject = new BehaviorSubject<Author>(new AnonymousUser());

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
      .getUser()
      .then((user) => this.newUser(user))
      .catch((error) => console.log("user not yet authenticated"));
  }

  currentUser(): Author {
    return this.subject.getValue();
  }

  onUser(): Observable<Author> {
    return this.subject.asObservable();
  }

  newUser(user: Author) {
    this.subject.next(user);
  }
}
