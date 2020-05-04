import {
  IPostSummaryApiResponse,
  IPostApiResponse,
  ICommentApiResponse,
} from "../models/post.external.models";
import { Injectable } from "@angular/core";
import { IPostSummary, IComment, IPost } from "../models/post.internal.models";
import { UserConverter } from "../../shared/converter/user.converter";

@Injectable()
export class PostConverter {
  constructor(private userConverter: UserConverter) {}

  fromPostSummary(post: IPostSummaryApiResponse): IPostSummary {
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
    };
  }

  fromPost(post: IPostApiResponse): IPost {
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
      author: post.author,
      bodyMarkdown: atob(post.bodyMarkdownBase64),
      comments: [
        ...(post.comments || []).map((comment) => this.from(comment)),
      ].sort(this.sortByDate),
    };
  }

  private sortByDate(a: IComment, b: IComment) {
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return -1;
  }

  private from(comment: ICommentApiResponse): IComment {
    return {
      author: this.userConverter.toUser(comment.author),
      createdAt: new Date(comment.createdAtIso8601),
      value: comment.value,
    };
  }

  private calculateSearchKey(postTitle: string, postTags: string[]): string {
    return [...postTitle.split(" "), ...postTags].join(" ");
  }
}
