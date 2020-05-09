import { Observable } from "rxjs";
import { PostsSummaries, IPost } from "../models/post.internal.models";
import { ICommentApiRequest } from "../models/post.external.models";

export abstract class PostHttpServices {
  abstract getPostSummaries(): Observable<PostsSummaries>;
  abstract getPostById(postId: number): Observable<IPost>;
  abstract createComment(comment: ICommentApiRequest): Promise<any>;
}
