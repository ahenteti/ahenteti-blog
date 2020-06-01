import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  CurrentUserApiResponse,
  GetUsersPageApiRequest,
  UserApiResponse,
  UsersPageApiResponse,
  DeleteUserApiRequest,
} from "../models/user.external.models";
import { map } from "rxjs/operators";
import { UserConverter } from "./user.converter";
import { CurrentUser, UsersPage } from "../models/user.internal.models";
import { CommonHttpClient } from "../../alert/common.http-client";
import { AlertService } from "../../alert/alert.service";

export const GET_CURRENT_IDENTITY_URL = "/api/currentIdentity";

@Injectable()
export class UserHttpClient extends CommonHttpClient {
  constructor(
    private http: HttpClient,
    private userConverter: UserConverter,
    alertService: AlertService
  ) {
    super(alertService);
  }

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

  // prettier-ignore
  deleteUser(request: DeleteUserApiRequest): Promise<void> {
    return this.http
      .delete<void>(request.url)
      .toPromise();
  }
}
