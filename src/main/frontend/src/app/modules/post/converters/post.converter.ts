import {
  IPostSummaryApiResponse,
  IPostApiResponse,
} from "../models/post.external.models";
import { Injectable } from "@angular/core";
import { IPostSummary, IPost } from "../models/post.internal.models";
import { UserConverter } from "../../user/converter/user.converter";

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
      author: this.userConverter.toUser(post.author),
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
      author: this.userConverter.toUser(post.author),
      bodyMarkdown: atob(post.bodyMarkdownBase64),
    };
  }

  private calculateSearchKey(postTitle: string, postTags: string[]): string {
    return [...postTitle.split(" "), ...postTags].join(" ");
  }
}
