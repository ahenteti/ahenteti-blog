import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import {
  PostApiResponse,
  PostSummaryApiResponse,
  GetUserPostsApiRequest,
  CreatePostApiRequest,
  UpdatePostApiRequest,
  DeletePostApiRequest,
  PageApiResponse,
  GetUserPostsApiResponse,
} from "../models/post.external.models";
import {
  PostsSummaries,
  Post,
  OfflinePost,
  PostSummary,
  PostsSummariesPage,
} from "../models/post.internal.models";
import { PostConverter } from "./post.converter";
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
      .get<PostSummaryApiResponse[]>("/api/posts-summaries")
      .pipe(map((posts) => this.postConverter.toPostsSummaries(posts)))
      .pipe(this.catchGetAllPostsSummariesError())
      .toPromise();
    // prettier-ignore
  }

  getUserPosts(request: GetUserPostsApiRequest): Promise<PostsSummariesPage> {
    // prettier-ignore
    return this.http
      .get<GetUserPostsApiResponse>(request.url)
      .pipe(map((posts) => this.postConverter.toPostsSummariesPage(posts)))
      .toPromise();
    // prettier-ignore
  }

  getPostById(postId: number): Promise<Post> {
    return this.http
      .get<PostApiResponse>(`/api/posts/${postId}`)
      .pipe(map((post) => this.postConverter.toPost(post)))
      .pipe(this.catchGetPostByIdError())
      .toPromise();
  }

  createPost(request: CreatePostApiRequest): Promise<PostSummary> {
    // prettier-ignore
    return this.http
      .post<PostSummaryApiResponse>(request.url, request.body)
      .pipe(map((post) => this.postConverter.toPostSummary(post)))
      .toPromise();
    // prettier-ignore
  }

  updatePost(request: UpdatePostApiRequest): Promise<PostSummary> {
    // prettier-ignore
    return this.http
      .put<PostSummaryApiResponse>(request.url, request.body)
      .pipe(map((post) => this.postConverter.toPostSummary(post)))
      .toPromise();
    // prettier-ignore
  }

  deletePost(request: DeletePostApiRequest): Promise<void> {
    // prettier-ignore
    return this.http
      .delete<void>(request.url)
      .toPromise();
    // prettier-ignore
  }

  private catchGetPostByIdError(): OperatorFunction<Post, Post> {
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
}
