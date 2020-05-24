import { Injectable } from "@angular/core";
import {
  AuthorApiResponse,
  CurrentUserApiResponse,
  UserApiResponse,
  GetUsersPageApiRequest,
  UsersPageApiResponse,
} from "../models/user.external.models";
import {
  Author,
  CurrentUser,
  User,
  UsersPage,
} from "../models/user.internal.models";

@Injectable()
export class UserConverter {
  toAuthor(author: AuthorApiResponse): Author {
    return {
      username: author.username,
      avatarUrl: author.avatarUrl,
    };
  }

  toCurrentUser(user: CurrentUserApiResponse): CurrentUser {
    return {
      username: user.username,
      avatarUrl: user.avatarUrl,
      isAuthenticated: user.username !== undefined && user.username !== null,
      isAdmin: user.roles.includes("ADMIN"),
    };
  }

  toUser(user: UserApiResponse): User {
    return {
      username: user.username,
      avatarUrl: user.avatarUrl,
      provider: user.provider,
      joinAt: new Date(user.joinAtIso8601),
    };
  }

  toGetUsersPageApiRequest(
    filter: string,
    page: number,
    size = 5,
    sortBy = "username",
    sortDirection = "asc"
  ): GetUsersPageApiRequest {
    return {
      url: `/secure-api/users?filter=${filter}&page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
    };
  }

  toUsersPage(usersPage: UsersPageApiResponse): UsersPage {
    const res = new UsersPage();
    res.totalItems = usersPage.totalItems;
    res.firstPage = usersPage.page == 0;
    res.lastPage = usersPage.lastPage;
    res.page = usersPage.page;
    usersPage.items.forEach((user) => res.items.push(this.toUser(user)));
    return res;
  }
}
