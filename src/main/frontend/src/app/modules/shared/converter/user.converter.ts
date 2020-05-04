import { Injectable } from "@angular/core";
import { IUserApiResponse } from "../models/user.external.models";
import { IUser } from "../models/user.internal.models";

@Injectable()
export class UserConverter {
  toUser(user: IUserApiResponse): IUser {
    return {
      username: user.username,
      avatarUrl: user.avatarUrl,
    };
  }
}
