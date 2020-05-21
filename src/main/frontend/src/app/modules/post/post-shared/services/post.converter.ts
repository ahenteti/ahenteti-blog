import {
  PostSummaryApiResponse,
  PostApiResponse,
  GetUserPostsApiRequest,
  CreatePostApiRequest,
  UpdatePostApiRequest,
  DeletePostApiRequest,
  UserPostsApiResponse,
  PostsSummariesGroupApiResponse,
  PostGroupByStrategyApiResponse,
  GetPostGroupByStrategiesApiRequest,
  GetPostsGroupsApiRequest,
  PostsGroupApiResponse,
} from "../models/post.external.models";
import { Injectable } from "@angular/core";
import {
  PostSummary,
  Post,
  PostsSummaries,
  PostsSummariesPage,
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
      lastUpdatedAt: new Date(
        post.lastUpdatedAtIso8601
          ? post.lastUpdatedAtIso8601
          : post.createdAtIso8601
      ),
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
      lastUpdatedAt: new Date(
        post.lastUpdatedAtIso8601
          ? post.lastUpdatedAtIso8601
          : post.createdAtIso8601
      ),
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

  toPostsSummariesPage(posts: UserPostsApiResponse): PostsSummariesPage {
    const res = new PostsSummariesPage();
    res.totalItems = posts.totalItems;
    res.firstPage = posts.page == 0;
    res.lastPage = posts.lastPage;
    res.page = posts.page;
    const items = new Array<PostSummary>();
    posts.items.forEach((post) => items.push(this.toPostSummary(post)));
    res.items = items;
    return res;
  }

  toGetUserPostsApiRequest(page = 0, size = 5): GetUserPostsApiRequest {
    return {
      url: `/secure-api/user/posts-summaries?page=${page}&size=${size}`,
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
        createdAtIso8601: post.createdAt.toISOString(),
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

  private calculateSearchKey(postTitle: string, postTags: string[]): string {
    return [...postTitle.split(" "), ...postTags].join(" ");
  }
}
