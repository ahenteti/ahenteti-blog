import {
  PostSummaryApiResponse,
  PostApiResponse,
  GetUserPostsApiRequest,
  CreatePostApiRequest,
  UpdatePostApiRequest,
  DeletePostApiRequest,
  UserPostsPageApiResponse,
  PostsSummariesGroupApiResponse,
  PostGroupByStrategyApiResponse,
  GetPostGroupByStrategiesApiRequest,
  GetPostsGroupsApiRequest,
  PostsGroupApiResponse,
  UploadPostsApiRequest,
} from "../models/post.external.models";
import { Injectable } from "@angular/core";
import {
  PostSummary,
  Post,
  PostsPage,
  PostsGroups,
  PostsGroup,
  PostGroupByStrategies,
  PostGroupByStrategy,
} from "../models/post.internal.models";
import { UserConverter } from "../../../user/services/user.converter";

@Injectable()
export class PostConverter {
  constructor(private userConverter: UserConverter) {}

  toPostSummary(post: PostSummaryApiResponse): PostSummary {
    return {
      id: post.id,
      title: post.title,
      category: post.category,
      tags: post.tags,
      createdAt: new Date(post.createdAtIso8601),
      lastUpdatedAt: post.lastUpdatedAtIso8601
        ? new Date(post.lastUpdatedAtIso8601)
        : null,
      author: this.userConverter.toAuthor(post.author),
      searchKey: this.calculateSearchKey(post.title, post.tags),
    };
  }

  toPost(post: PostApiResponse): Post {
    return {
      id: post.id,
      title: post.title,
      category: post.category,
      tags: post.tags,
      createdAt: new Date(post.createdAtIso8601),
      lastUpdatedAt: post.lastUpdatedAtIso8601
        ? new Date(post.lastUpdatedAtIso8601)
        : null,
      searchKey: this.calculateSearchKey(post.title, post.tags),
      author: this.userConverter.toAuthor(post.author),
      bodyMarkdown: atob(post.bodyMarkdownBase64),
    };
  }

  // prettier-ignore
  toPostGroupByStrategies(strategies: PostGroupByStrategyApiResponse[]): PostGroupByStrategies {
    const res = new PostGroupByStrategies();
    strategies.forEach(strategy => res.push(this.toPostGroupByStrategy(strategy)));
    return res;
  }

  // prettier-ignore
  toPostGroupByStrategy(strategy: PostGroupByStrategyApiResponse): PostGroupByStrategy {
    const res = new PostGroupByStrategy();
    res.name = strategy.name;
    res.values = strategy.values;
    return res;
  }

  toPostsSummaries(posts: PostsSummariesGroupApiResponse[]): PostsGroups {
    let res = new PostsGroups();
    posts.forEach((postsGroupApiResponse) => {
      let postsGroup = new PostsGroup();
      postsGroup.name = postsGroupApiResponse.groupName;
      postsGroup.posts = [];
      postsGroupApiResponse.posts.forEach((post) =>
        postsGroup.posts.push(this.toPostSummary(post))
      );
      res.push(postsGroup);
    });
    return res;
  }

  // prettier-ignore
  toPostsGroups(postsGroups: PostsGroupApiResponse[]): PostsGroups {
    const res = new PostsGroups();
    postsGroups.forEach(postsGroup => res.push(this.toPostsGroup(postsGroup)));
    return res;
  }

  // prettier-ignore
  toPostsGroup(postsGroupApiResponse: PostsGroupApiResponse): PostsGroup {
    const res = new PostsGroup();
    res.name = postsGroupApiResponse.name;
    postsGroupApiResponse.posts.forEach(post => res.posts.push(this.toPostSummary(post)));
    return res;
  }

  toPostsSummariesPage(posts: UserPostsPageApiResponse): PostsPage {
    const res = new PostsPage();
    res.totalItems = posts.totalItems;
    res.firstPage = posts.page == 0;
    res.lastPage = posts.lastPage;
    res.page = posts.page;
    const items = new Array<PostSummary>();
    posts.items.forEach((post) => items.push(this.toPostSummary(post)));
    res.items = items;
    return res;
  }

  toGetUserPostsApiRequest(
    filter: string,
    page: number,
    size = 5
  ): GetUserPostsApiRequest {
    return {
      url: `/secure-api/user/posts-summaries-page?filter=${filter}&page=${page}&size=${size}`,
    };
  }

  toGetAllUserPostsApiRequest(): GetUserPostsApiRequest {
    return {
      url: `/secure-api/user/posts-summaries`,
    };
  }

  toCreatePostApiRequest(post: Post): CreatePostApiRequest {
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

  toUpdatePostApiRequest(post: Post): UpdatePostApiRequest {
    return {
      url: `/secure-api/posts/${post.id}`,
      body: {
        title: post.title,
        category: post.category,
        tags: post.tags,
        bodyMarkdownBase64: btoa(post.bodyMarkdown),
      },
    };
  }

  toDeletePostApiRequest(postId: number): DeletePostApiRequest {
    return {
      url: `/secure-api/posts/${postId}`,
    };
  }

  toGetPostGroupByStrategiesApiRequest(): GetPostGroupByStrategiesApiRequest {
    return {
      url: "/api/post-group-by-strategies",
    };
  }

  // prettier-ignore
  toGetPostsGroupsApiRequest(groupBy: string, groups: Array<string>): GetPostsGroupsApiRequest {
    return {
      url: `/api/posts-groups?groupBy=${groupBy}&groups=${groups.join(',')}`,
    };
  }

  toUploadPostsApiRequest(file: File): UploadPostsApiRequest {
    return {
      url: "/secure-api/posts/bulk_create_and_update_operations.json",
      file: file,
    };
  }

  private calculateSearchKey(postTitle: string, postTags: string[]): string {
    return [...postTitle.split(" "), ...postTags].join(" ");
  }
}
