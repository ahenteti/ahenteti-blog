import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import {
  IPostApiResponse,
  IPostSummaryApiResponse,
  GetUserPostsApiRequest,
} from "../models/post.external.models";
import {
  PostsSummaries,
  IPost,
  OfflinePost,
} from "../models/post.internal.models";
import { PostConverter } from "../converters/post.converter";
import { HttpClient } from "@angular/common/http";
import { CommonHttpServices } from "../../../alert/common.http.services";
import { AlertService } from "../../../alert/alert.service";
import { OperatorFunction } from "rxjs";

@Injectable()
export class PostHttpServices extends CommonHttpServices {
  constructor(
    private postConverter: PostConverter,
    private http: HttpClient,
    alertService: AlertService
  ) {
    super(alertService);
  }

  getAllPostsSummaries(): Promise<PostsSummaries> {
    // prettier-ignore
    return this.http
      .get<IPostSummaryApiResponse[]>("/api/posts-summaries")
      .pipe(map((posts) => this.postConverter.fromPostSummaryApiResponseArray(posts)))
      .pipe(this.catchGetAllPostsSummariesError())
      .toPromise();
    // prettier-ignore
  }

  getUserPosts(page: number): Promise<PostsSummaries>;
  getUserPosts(request: GetUserPostsApiRequest): Promise<PostsSummaries>;
  getUserPosts(arg: any): Promise<PostsSummaries> {
    let request: GetUserPostsApiRequest;
    if (arg instanceof GetUserPostsApiRequest) {
      request = <GetUserPostsApiRequest>arg;
    } else {
      request = this.postConverter.toGetUserPostsApiRequest(arg);
    }
    console.log(request);
    const url = this.postConverter.toGetUserPostsApiRequestUrl(request);
    // prettier-ignore
    return this.http
      .get<IPostSummaryApiResponse[]>(url)
      .pipe(map((posts) => this.postConverter.fromPostSummaryApiResponseArray(posts)))
      .pipe(this.catchGetUserPostsError())
      .toPromise();
    // prettier-ignore
  }

  getPostById(postId: number): Promise<IPost> {
    return this.http
      .get<IPostApiResponse>(`/api/posts/${postId}`)
      .pipe(map((post) => this.postConverter.fromPost(post)))
      .pipe(this.catchGetPostByIdError())
      .toPromise();
  }

  private catchGetPostByIdError(): OperatorFunction<IPost, IPost> {
    return catchError(
      this.handleError(
        `Error while fetching post content :(`,
        new OfflinePost()
      )
    );
  }

  private catchGetAllPostsSummariesError(): OperatorFunction<
    PostsSummaries,
    PostsSummaries
  > {
    return catchError(
      this.handleError("Error while fetching post summaries :(", [])
    );
  }

  private catchGetUserPostsError(): OperatorFunction<
    PostsSummaries,
    PostsSummaries
  > {
    return catchError(
      this.handleError("Error while fetching user posts :(", [])
    );
  }
}
