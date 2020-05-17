import {
  IPostSummaryApiResponse,
  IPostApiResponse,
  GetUserPostsApiRequest,
  CreatePostApiRequest,
  UpdatePostApiRequest,
  DeletePostApiRequest,
  GetUserPostsApiResponse,
} from "../models/post.external.models";
import { Injectable } from "@angular/core";
import {
  IPostSummary,
  IPost,
  PostsSummaries,
  PostsSummariesPage,
} from "../models/post.internal.models";
import { UserConverter } from "../../../user/converter/user.converter";

@Injectable()
export class PostConverter {
  constructor(private userConverter: UserConverter) {}

  toPostSummary(post: IPostSummaryApiResponse): IPostSummary {
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

  toPost(post: IPostApiResponse): IPost {
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

  toPostsSummaries(posts: IPostSummaryApiResponse[]): PostsSummaries {
    let data = new PostsSummaries();
    posts.forEach((post) => data.push(this.toPostSummary(post)));
    return data;
  }

  toPostsSummariesPage(posts: GetUserPostsApiResponse): PostsSummariesPage {
    const res = new PostsSummariesPage();
    res.totalItems = posts.totalItems;
    res.firstPage = posts.page == 0;
    res.lastPage = posts.lastPage;
    res.page = posts.page;
    const items = new Array<IPostSummary>();
    posts.items.forEach((post) => items.push(this.toPostSummary(post)));
    res.items = items;
    return res;
  }

  toGetUserPostsApiRequest(page = 0, size = 5): GetUserPostsApiRequest {
    return {
      url: `/secure-api/user/posts-summaries?page=${page}&size=${size}`,
    };
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

  toDeletePostApiRequest(postId: number): DeletePostApiRequest {
    return {
      url: `/secure-api/posts/${postId}`,
    };
  }

  private calculateSearchKey(postTitle: string, postTags: string[]): string {
    return [...postTitle.split(" "), ...postTags].join(" ");
  }
}
