import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  IPostApiResponse,
  IPostSummaryApiResponse,
  ICommentApiRequest,
} from "../models/post.external.models";
import { PostHttpServices } from "./post.http.services";
import {
  PostsSummaries,
  IPost,
  EmptyPost,
} from "../models/post.internal.models";
import { PostConverter } from "../converters/post.converter";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostHttpServicesImpl extends PostHttpServices {
  constructor(private postConverter: PostConverter, private http: HttpClient) {
    super();
  }

  getPostSummaries(): Observable<PostsSummaries> {
    return this.http
      .get<IPostSummaryApiResponse[]>("/api/posts-summaries")
      .pipe(
        map((postsSummary) => {
          let data = new PostsSummaries();
          postsSummary.forEach((post) =>
            data.push(this.postConverter.fromPostSummary(post))
          );
          return data;
        })
      )
      .pipe(catchError(this.handleError("getPostSummaries", [])));
  }

  getPostById(postId: number): Observable<IPost> {
    return this.http
      .get<IPostApiResponse>(`/api/posts/${postId}`)
      .pipe(
        map((post) => {
          const postAfterTransformation = this.postConverter.fromPost(post);
          postAfterTransformation.id = postId;
          return postAfterTransformation;
        })
      )
      .pipe(catchError(this.handleError("getPostById", new EmptyPost())));
  }

  createComment(comment: ICommentApiRequest) {
    return this.http.post<any>("/secure-api/comment", comment).toPromise();
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
