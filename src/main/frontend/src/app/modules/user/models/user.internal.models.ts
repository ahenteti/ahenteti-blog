export class User {
  username: string;
  avatarUrl: string;
  isAuthenticated = false;
}

export class AnonymousUser extends User {
  constructor() {
    super();
    this.username = "Anonymous";
  }
}
