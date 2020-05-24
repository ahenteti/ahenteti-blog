import { Page } from "../../shared/models/page.model";

export class Author {
  username: string;
  avatarUrl: string;
}

export class CurrentUser {
  username: string;
  avatarUrl: string;
  isAuthenticated = false;
  isAdmin = false;
}

export class User {
  username: string;
  avatarUrl: string;
  provider: string;
  joinAt: Date;
}

export class AnonymousUser extends CurrentUser {
  constructor() {
    super();
    this.username = "Anonymous";
  }
}

export class UsersPage extends Page<User> {}
