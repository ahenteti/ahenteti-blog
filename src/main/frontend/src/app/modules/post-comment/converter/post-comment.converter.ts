import { Injectable } from "@angular/core";
import { UserConverter } from "../../user/converter/user.converter";
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
      author: this.userConverter.toUser(postComment.author),
      createdAt: new Date(postComment.createdAtIso8601),
      value: postComment.value,
    };
  }

  toGetPostCommentsApiRequest(
    postId: number,
    page: number,
    size = 10
  ): GetPostCommentsApiRequest {
    return {
      postId,
      page,
      size,
    };
  }

  toGetPostCommentsApiRequestUrl(request: GetPostCommentsApiRequest): string {
    return `/api/post/${request.postId}/comment?page=${request.page}&size=${request.size}`;
  }

  toCreatePostCommentApiUrl(request: ICreatePostCommentApiRequest): string {
    return `/secure-api/post/${request.postId}/comment`;
  }

  toCreatePostCommentApiBody(
    request: ICreatePostCommentApiRequest
  ): ICreatePostCommentApiRequestBody {
    return {
      value: request.value,
    };
  }
}
