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
import { PostsByCategoryComponent } from "./components/posts-by-category/posts-by-category.component";
import { AlertModule } from "../../alert/alert.module";
import { PostCommentModule } from "../post-comments/post-comment.module";

@NgModule({
  imports: [CommonModule, SharedModule, AlertModule, PostCommentModule],
  declarations: [
    TagComponent,
    TagListComponent,
    PostSummaryComponent,
    PostsByCategoryComponent,
    SearchPostsComponent,
    PostsWelcomeMessageComponent,
    PostLayoutComponent,
    PostTitleComponent,
  ],
  exports: [
    PostLayoutComponent,
    PostTitleComponent,
    PostsWelcomeMessageComponent,
    SearchPostsComponent,
    PostsByCategoryComponent,
  ],
})
export class PostSharedModule {}
