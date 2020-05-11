import { User, AnonymousUser } from "../../../user/models/user.internal.models";

export interface IPostComment {
  author: User;
  createdAt: Date;
  value: string;
}

export class EmptyPostComment implements IPostComment {
  author = new AnonymousUser();
  createdAt = new Date();
  value: "";
}

export class PostComments extends Array<IPostComment> {}
