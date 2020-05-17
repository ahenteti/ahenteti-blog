import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserApiResponse } from "../models/user.external.models";
import { map } from "rxjs/operators";
import { UserConverter } from "./user.converter";
import { User } from "../models/user.internal.models";

@Injectable()
export class UserHttpServices {
  constructor(private http: HttpClient, private userConverter: UserConverter) {}

  getUser(): Promise<User> {
    return this.http
      .get<UserApiResponse>("/api/currentIdentity")
      .pipe(map(this.userConverter.toUser))
      .toPromise();
  }
}
