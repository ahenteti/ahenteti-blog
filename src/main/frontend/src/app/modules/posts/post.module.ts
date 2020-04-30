import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { SearchPostsComponent } from "./components/search-posts/search-posts.component";
import { Routes, RouterModule } from "@angular/router";
import { PostHttpServicesMock } from "./services/post.http.services.mock";
import { PostConverter } from "./converters/post.converter";
import { ConsultPostPage } from "./pages/consult-post/consult-post.page";
import { TagComponent } from "./components/tag/tag.component";
import { TagListComponent } from "./components/tag/tag-list.component";
import { PostHttpServices } from "./services/post.http.services";
import { PostLayoutComponent } from "./components/post-layout/post-layout.component";
import { PostTitleComponent } from "./components/post-title/post-title.component";
import { CommentComponent } from "./components/comments/comment.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { PostDashboardPage } from "./pages/post-dashboard/post-dashboard.page";
import { PostSummaryComponent } from "./components/post-summary/post-summary.component";
import { PostsWelcomeMessageComponent } from "./components/posts-welcome-message/posts-welcome-message.component";
import { PostsByCategoryComponent } from "./components/posts-by-category/posts-by-category.component";

const routes: Routes = [
  { path: "", component: PostDashboardPage },
  { path: "consult-post/:id", component: ConsultPostPage },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    TagComponent,
    TagListComponent,
    PostSummaryComponent,
    PostsByCategoryComponent,
    SearchPostsComponent,
    PostsWelcomeMessageComponent,
    PostLayoutComponent,
    PostTitleComponent,
    CommentComponent,
    CommentsComponent,
    PostDashboardPage,
    ConsultPostPage,
  ],
  exports: [RouterModule],
  providers: [
    { provide: PostHttpServices, useClass: PostHttpServicesMock },
    PostConverter,
  ],
})
export class PostModule {}
