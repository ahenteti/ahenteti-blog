import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserApiResponse } from "../models/user.external.models";
import { map } from "rxjs/operators";
import { UserConverter } from "../converter/user.converter";
import { User } from "../models/user.internal.models";

@Injectable()
export class UserHttpServices {
  constructor(private http: HttpClient, private userConverter: UserConverter) {}

  getUser(): Promise<User> {
    return this.http
      .get<IUserApiResponse>("/api/isAuthenticated")
      .pipe(map(this.userConverter.toUser))
      .toPromise();
  }
}