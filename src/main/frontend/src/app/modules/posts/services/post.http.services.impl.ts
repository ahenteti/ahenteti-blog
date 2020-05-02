import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import {
  IPostApiResponse,
  IPostSummaryApiResponse,
} from "../models/post.external.models";
import { PostHttpServices } from "./post.http.services";
import { PostsSummaries, IPost } from "../models/post.internal.models";
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
      );
  }

  getPostById(postId: number): Observable<IPost> {
    return this.http.get<IPostApiResponse>(`/api/posts/${postId}`).pipe(
      map((post) => {
        const postAfterTransformation = this.postConverter.fromPost(post);
        postAfterTransformation.id = postId;
        return postAfterTransformation;
      })
    );
  }
}
