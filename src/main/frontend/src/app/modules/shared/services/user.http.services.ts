import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserApiResponse } from "../models/user.external.models";
import { map } from "rxjs/operators";
import { UserConverter } from "../converter/user.converter";
import { IUser } from "../models/user.internal.models";

@Injectable()
export class UserHttpServices {
  constructor(private http: HttpClient, private userConverter: UserConverter) {}

  getUser(): Promise<IUser> {
    return this.http
      .get<IUserApiResponse>("/api/user")
      .pipe(map(this.userConverter.toUser))
      .toPromise();
  }
}
