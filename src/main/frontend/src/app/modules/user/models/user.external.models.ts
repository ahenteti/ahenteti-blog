import { PageApiResponse } from "../../shared/models/page.model";

export class CurrentUserApiResponse {
  username: string;
  avatarUrl: string;
  roles: Array<string>;
}

export class AuthorApiResponse {
  username: string;
  avatarUrl: string;
}

export class UserApiResponse {
  id: number;
  username: string;
  avatarUrl: string;
  provider: string;
  joinAtIso8601: string;
}

export class GetUsersPageApiRequest {
  url: string;
}

export class DeleteUserApiRequest {
  url: string;
}

export class UsersPageApiResponse extends PageApiResponse<UserApiResponse> {}
