import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { SearchPostsComponent } from "./components/search-posts/search-posts.component";
import { TagComponent } from "./components/tag/tag.component";
import { TagListComponent } from "./components/tag/tag-list.component";
import { PostLayoutComponent } from "./components/post-layout/post-layout.component";
import { PostTitleComponent } from "./components/post-title/post-title.component";
import { PostSummaryComponent } from "./components/post-summary/post-summary.component";
import { PostsWelcomeMessageComponent } from "./components/posts-welcome-message/posts-welcome-message.component";
import { PostsGroupComponent } from "./components/posts-group/posts-group.component";
import { AlertModule } from "../../alert/alert.module";
import { PostCommentModule } from "../post-comments/post-comment.module";
import { CreateUpdatePostFormComponent } from "./components/create-update-post-form/create-update-post-form.component";

@NgModule({
  imports: [CommonModule, SharedModule, AlertModule, PostCommentModule],
  declarations: [
    TagComponent,
    TagListComponent,
    PostSummaryComponent,
    PostsGroupComponent,
    SearchPostsComponent,
    PostsWelcomeMessageComponent,
    PostLayoutComponent,
    PostTitleComponent,
    CreateUpdatePostFormComponent,
  ],
  exports: [
    PostLayoutComponent,
    PostTitleComponent,
    PostsWelcomeMessageComponent,
    SearchPostsComponent,
    PostsGroupComponent,
    CreateUpdatePostFormComponent,
  ],
})
export class PostSharedModule {}
