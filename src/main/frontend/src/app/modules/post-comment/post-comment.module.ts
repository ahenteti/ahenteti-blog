import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { PostCommentConverter } from "./converter/post-comment.converter";
import { PostCommentHttpServices } from "./services/post-comment.http.service";
import { PostCommentsComponent } from "./components/post-comments/post-comments.component";
import { AddPostCommentComponent } from "./components/add-post-comment/add-post-comment.component";
import { PostCommentComponent } from "./components/post-comment/post-comment.component";
import { UserModule } from "../user/user.module";

@NgModule({
  imports: [CommonModule, SharedModule, UserModule, HttpClientModule],
  exports: [SharedModule, HttpClientModule, UserModule, PostCommentsComponent],
  declarations: [
    PostCommentsComponent,
    PostCommentComponent,
    AddPostCommentComponent,
  ],
  providers: [PostCommentConverter, PostCommentHttpServices],
})
export class PostCommentModule {}
