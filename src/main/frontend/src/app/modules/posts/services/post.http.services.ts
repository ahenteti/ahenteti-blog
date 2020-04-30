import { Observable } from "rxjs";
import { PostsSummaries, IPost } from "../models/post.internal.models";

export abstract class PostHttpServices {
  abstract getPostSummaries(): Observable<PostsSummaries>;
  abstract getPostById(postId: number): Observable<IPost>;
}
