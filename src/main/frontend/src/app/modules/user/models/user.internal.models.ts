export class User {
  username: string;
  avatarUrl: string;
  roles: Array<string>;
  isAuthenticated = false;
}

export class AnonymousUser extends User {
  constructor() {
    super();
    this.username = "Anonymous";
  }
}
