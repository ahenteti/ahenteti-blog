import { Injectable } from "@angular/core";
import {
  AuthorApiResponse,
  CurrentUserApiResponse,
} from "../models/user.external.models";
import { Author, CurrentUser } from "../models/user.internal.models";

@Injectable()
export class UserConverter {
  toAuthor(author: AuthorApiResponse): Author {
    return {
      username: author.username,
      avatarUrl: author.avatarUrl,
    };
  }

  toUser(user: CurrentUserApiResponse): CurrentUser {
    return {
      username: user.username,
      avatarUrl: user.avatarUrl,
      isAuthenticated: user.username !== undefined && user.username !== null,
      isAdmin: user.roles.includes("ADMIN"),
    };
  }
}
