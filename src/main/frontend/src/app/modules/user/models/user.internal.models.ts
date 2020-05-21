export class Author {
  username: string;
  avatarUrl: string;
}

export class User {
  username: string;
  avatarUrl: string;
  isAuthenticated = false;
  isAdmin = false;
}

export class AnonymousUser extends User {
  constructor() {
    super();
    this.username = "Anonymous";
  }
}
