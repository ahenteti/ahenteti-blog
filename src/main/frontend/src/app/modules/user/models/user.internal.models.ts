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

export class AnonymousUser extends CurrentUser {
  constructor() {
    super();
    this.username = "Anonymous";
  }
}
