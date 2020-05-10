import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonHttpServices } from "../../shared/services/common.http.services";
import { map } from "rxjs/operators";
import { PostCommentConverter } from "../converter/post-comment.converter";
import { PostComments } from "../models/post-comment.internal.models";
import {
  GetPostCommentsApiRequest,
  IPostCommentApiResponse,
  ICreatePostCommentApiRequest,
} from "../models/post-comment.external.models";

@Injectable()
export class PostCommentHttpServices extends CommonHttpServices {
  constructor(
    private commentConverter: PostCommentConverter,
    private http: HttpClient
  ) {
    super();
  }

  getPostComments(request: GetPostCommentsApiRequest): Promise<PostComments> {
    const url = this.commentConverter.toGetPostCommentsApiRequestUrl(request);
    return this.http
      .get<IPostCommentApiResponse[]>(url)
      .pipe(
        map((postComments) => {
          let data: PostComments = new PostComments();
          postComments.forEach((post) =>
            data.push(this.commentConverter.toPostComment(post))
          );
          return data;
        })
      )
      .toPromise();
  }

  createPostComment(request: ICreatePostCommentApiRequest): Promise<any> {
    const url = this.commentConverter.toCreatePostCommentApiUrl(request);
    const body = this.commentConverter.toCreatePostCommentApiBody(request);
    return this.http
      .post<any>(url, body, this.jsonContentTypeOption)
      .toPromise();
  }
}
