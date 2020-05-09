import { Injectable } from "@angular/core";
import { IUser } from "../models/user.internal.models";
import { Subject } from "rxjs";

// code inspiration: https://www.youtube.com/watch?v=I317BhehZKM
@Injectable({ providedIn: "root" })
export class UserObservableService {
  private userSource = new Subject<IUser>();
  currentUser = this.userSource.asObservable();

  changeUser(user: IUser) {
    console.log(user);
    this.userSource.next(user);
  }
}
