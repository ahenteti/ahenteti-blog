import { Injectable } from "@angular/core";
import { IUserApiResponse } from "../../user/models/user.external.models";
import { User } from "../models/user.internal.models";

@Injectable()
export class UserConverter {
  toUser(user: IUserApiResponse): User {
    return {
      username: user.username,
      avatarUrl: user.avatarUrl,
      isAuthenticated: user.username !== undefined && user.username !== null,
    };
  }
}
