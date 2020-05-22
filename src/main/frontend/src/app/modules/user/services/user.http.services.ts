import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AuthorApiResponse,
  CurrentUserApiResponse,
} from "../models/user.external.models";
import { map } from "rxjs/operators";
import { UserConverter } from "./user.converter";
import { CurrentUser } from "../models/user.internal.models";

export const GET_CURRENT_IDENTITY_URL = "/api/currentIdentity";

@Injectable()
export class UserHttpServices {
  constructor(private http: HttpClient, private userConverter: UserConverter) {}

  getUser(): Promise<CurrentUser> {
    return this.http
      .get<CurrentUserApiResponse>(GET_CURRENT_IDENTITY_URL)
      .pipe(map(this.userConverter.toUser))
      .toPromise();
  }
}
