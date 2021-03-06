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
  UploadPostsApiRequest,
  DeleteUserPostsApiRequest,
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

  getPostBySlug(slug: string): Promise<Post> {
    return this.http
      .get<PostApiResponse>(`/api/posts/${slug}`)
      .pipe(map((post) => this.postConverter.toPost(post)))
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

  uploadPosts(request: UploadPostsApiRequest): Promise<any> {
    // prettier-ignore
    const formData: FormData = new FormData();
    formData.append("file", request.file, request.file.name);
    return this.http
      .post<any>(request.url, formData)
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

  deleteUserPosts(request: DeleteUserPostsApiRequest): Promise<void> {
    // prettier-ignore
    return this.http
      .delete<void>(request.url)
      .toPromise();
    // prettier-ignore
  }
}
