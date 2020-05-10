import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import {
  IPostApiResponse,
  IPostSummaryApiResponse,
} from "../models/post.external.models";
import {
  PostsSummaries,
  IPost,
  OfflinePost,
} from "../models/post.internal.models";
import { PostConverter } from "../converters/post.converter";
import { HttpClient } from "@angular/common/http";
import { CommonHttpServices } from "../../alert/common.http.services";
import { AlertService } from "../../alert/alert.service";

@Injectable()
export class PostHttpServices extends CommonHttpServices {
  constructor(
    private postConverter: PostConverter,
    private http: HttpClient,
    alertService: AlertService
  ) {
    super(alertService);
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
      .pipe(
        catchError(
          this.handleError("Error while fetching post summaries :(", [])
        )
      );
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
      .pipe(
        catchError(
          this.handleError(
            `Error while fetching post content :(`,
            new OfflinePost()
          )
        )
      );
  }
}
