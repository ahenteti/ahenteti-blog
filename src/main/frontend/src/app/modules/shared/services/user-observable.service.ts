import { Injectable } from "@angular/core";
import { IUser } from "../models/user.internal.models";
import { Subject, BehaviorSubject } from "rxjs";

// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
@Injectable({ providedIn: "root" })
export class UserObservableService {
  userSource = new BehaviorSubject<IUser>(undefined);
  currentUser = this.userSource.asObservable();

  changeUser(user: IUser) {
    console.log(user);
    this.userSource.next(user);
  }
}
