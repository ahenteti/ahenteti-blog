import {
  IPostSummaryApiResponse,
  IPostApiResponse,
  GetUserPostsApiRequest,
  CreatePostApiRequest,
  UpdatePostApiRequest,
} from "../models/post.external.models";
import { Injectable } from "@angular/core";
import {
  IPostSummary,
  IPost,
  PostsSummaries,
} from "../models/post.internal.models";
import { UserConverter } from "../../../user/converter/user.converter";

@Injectable()
export class PostConverter {
  constructor(private userConverter: UserConverter) {}

  fromPostSummaryApiResponse(post: IPostSummaryApiResponse): IPostSummary {
    return {
      id: post.id,
      title: post.title,
      category: post.category,
      tags: post.tags,
      createdAt: new Date(post.createdAtIso8601),
      lastUpdatedAt: new Date(
        post.lastUpdatedAtIso8601
          ? post.lastUpdatedAtIso8601
          : post.createdAtIso8601
      ),
      author: this.userConverter.toUser(post.author),
      searchKey: this.calculateSearchKey(post.title, post.tags),
    };
  }

  fromPostApiResponse(post: IPostApiResponse): IPost {
    return {
      id: post.id,
      title: post.title,
      category: post.category,
      tags: post.tags,
      createdAt: new Date(post.createdAtIso8601),
      lastUpdatedAt: new Date(
        post.lastUpdatedAtIso8601
          ? post.lastUpdatedAtIso8601
          : post.createdAtIso8601
      ),
      searchKey: this.calculateSearchKey(post.title, post.tags),
      author: this.userConverter.toUser(post.author),
      bodyMarkdown: atob(post.bodyMarkdownBase64),
    };
  }

  fromPostSummaryApiResponseArray(
    posts: IPostSummaryApiResponse[]
  ): PostsSummaries {
    let data = new PostsSummaries();
    posts.forEach((post) => data.push(this.fromPostSummaryApiResponse(post)));
    return data;
  }

  toGetUserPostsApiRequest(page: number, size = 5): GetUserPostsApiRequest {
    return {
      page,
      size,
    };
  }

  toGetUserPostsApiRequestUrl(request: GetUserPostsApiRequest) {
    return `/secure-api/user/posts-summaries?page=${request.page}&size=${request.size}`;
  }

  toCreatePostApiRequest(post: IPost): CreatePostApiRequest {
    return {
      url: "/secure-api/posts",
      body: {
        title: post.title,
        category: post.category,
        tags: post.tags,
        bodyMarkdownBase64: btoa(post.bodyMarkdown),
      },
    };
  }

  toUpdatePostApiRequest(post: IPost): UpdatePostApiRequest {
    return {
      url: `/secure-api/posts/${post.id}`,
      body: {
        title: post.title,
        category: post.category,
        tags: post.tags,
        bodyMarkdownBase64: btoa(post.bodyMarkdown),
        createdAtIso8601: post.createdAt.toISOString(),
      },
    };
  }

  private calculateSearchKey(postTitle: string, postTags: string[]): string {
    return [...postTitle.split(" "), ...postTags].join(" ");
  }
}
