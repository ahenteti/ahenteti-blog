import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import {
  PostApiResponse,
  PostSummaryApiResponse,
  GetUserPostsApiRequest,
  CreatePostApiRequest,
  UpdatePostApiRequest,
  DeletePostApiRequest,
  UserPostsPageApiResponse,
  PostGroupByStrategyApiResponse,
  GetPostGroupByStrategiesApiRequest,
  GetPostsGroupsApiRequest,
  PostsGroupApiResponse,
} from "../models/post.external.models";
import {
  Post,
  OfflinePost,
  PostSummary,
  PostsPage,
  PostsGroups,
  PostGroupByStrategies,
} from "../models/post.internal.models";
import { PostConverter } from "./post.converter";
import { HttpClient } from "@angular/common/http";
import { CommonHttpClient } from "../../../alert/common.http-client";
import { AlertService } from "../../../alert/alert.service";
import { OperatorFunction } from "rxjs";

@Injectable()
export class PostHttpClient extends CommonHttpClient {
  constructor(
    private postConverter: PostConverter,
    private http: HttpClient,
    alertService: AlertService
  ) {
    super(alertService);
  }

  // prettier-ignore
  getPostGroupByStrategies(request: GetPostGroupByStrategiesApiRequest): Promise<PostGroupByStrategies> {
    return this.http
      .get<PostGroupByStrategyApiResponse[]>(request.url)
      .pipe(map((strategies) => this.postConverter.toPostGroupByStrategies(strategies)))
      .toPromise();
  }

  // prettier-ignore
  getPostsGroups(request: GetPostsGroupsApiRequest): Promise<PostsGroups> {
    return this.http
      .get<PostsGroupApiResponse[]>(request.url)
      .pipe(map((postsGroups) => this.postConverter.toPostsGroups(postsGroups)))
      .toPromise();
  }

  getUserPosts(request: GetUserPostsApiRequest): Promise<PostsPage> {
    // prettier-ignore
    return this.http
      .get<UserPostsPageApiResponse>(request.url)
      .pipe(map((posts) => this.postConverter.toPostsSummariesPage(posts)))
      .toPromise();
  }

  getUserPostsBlob(request: GetUserPostsApiRequest): Promise<Blob> {
    // prettier-ignore
    return fetch(request.url)
    .then(response => response.blob())
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
}
