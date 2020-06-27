import { Injectable } from "@angular/core";
import { UserConverter } from "../../../user/services/user.converter";
import {
  IPostCommentApiResponse,
  GetPostCommentsApiRequest,
  ICreatePostCommentApiRequest,
  ICreatePostCommentApiRequestBody,
} from "../models/post-comment.external.models";
import { IPostComment } from "../models/post-comment.internal.models";

@Injectable()
export class PostCommentConverter {
  constructor(private userConverter: UserConverter) {}

  toPostComment(postComment: IPostCommentApiResponse): IPostComment {
    return {
      author: this.userConverter.toAuthor(postComment.author),
      createdAt: new Date(postComment.createdAtIso8601),
      value: postComment.value,
    };
  }

  toGetPostCommentsApiRequest(
    slug: string,
    page: number,
    size = 5
  ): GetPostCommentsApiRequest {
    return {
      slug,
      page,
      size,
    };
  }

  toGetPostCommentsApiRequestUrl(request: GetPostCommentsApiRequest): string {
    return `/api/posts/${request.slug}/comments?page=${request.page}&size=${request.size}`;
  }

  toCreatePostCommentApiUrl(request: ICreatePostCommentApiRequest): string {
    return `/secure-api/posts/${request.slug}/comments`;
  }

  toCreatePostCommentApiBody(
    request: ICreatePostCommentApiRequest
  ): ICreatePostCommentApiRequestBody {
    return {
      value: request.value,
    };
  }
}
