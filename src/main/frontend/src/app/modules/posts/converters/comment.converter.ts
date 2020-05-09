import { ICommentApiRequest } from "../models/post.external.models";
import { Injectable } from "@angular/core";
import { IComment } from "../models/post.internal.models";
import { IUser } from "../../shared/models/user.internal.models";

@Injectable()
export class CommentConverter {
  toComment(comment: ICommentApiRequest, author: IUser): IComment {
    return {
      author,
      createdAt: new Date(),
      value: comment.value,
    };
  }
}
