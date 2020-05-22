import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  CurrentUserApiResponse,
  GetUsersPageApiRequest,
  UserApiResponse,
  UsersPageApiResponse,
} from "../models/user.external.models";
import { map } from "rxjs/operators";
import { UserConverter } from "./user.converter";
import { CurrentUser, UsersPage } from "../models/user.internal.models";

export const GET_CURRENT_IDENTITY_URL = "/api/currentIdentity";

@Injectable()
export class UserHttpServices {
  constructor(private http: HttpClient, private userConverter: UserConverter) {}

  getCurrentUser(): Promise<CurrentUser> {
    return this.http
      .get<CurrentUserApiResponse>(GET_CURRENT_IDENTITY_URL)
      .pipe(map(this.userConverter.toCurrentUser))
      .toPromise();
  }

  getUsersPage(request: GetUsersPageApiRequest): Promise<UsersPage> {
    return this.http
      .get<UsersPageApiResponse>(request.url)
      .pipe(map((users) => this.userConverter.toUsersPage(users)))
      .toPromise();
  }
}
