import { Injectable } from "@angular/core";
import { IUser } from "../models/user.internal.models";

@Injectable({
  providedIn: "root",
})
export class UserState {
  public authenticated = false;
  private _user: IUser;

  constructor() {
    this.authenticated = true;
    this._user = {
      username: "ahenteti",
      avatarUrl: "https://avatars3.githubusercontent.com/u/16677361?v=4",
    };
    // this.authenticated = false;
    // this._user = undefined;
  }

  get user(): IUser {
    return this._user;
  }

  set user(user: IUser) {
    this._user = user;
    this.authenticated = user !== null || user !== undefined;
  }
}
