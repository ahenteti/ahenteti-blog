import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultPostPage } from "./consult-post-page/consult-post.page";
import { PostDashboardPage } from "./post-dashboard-page/post-dashboard.page";
import { SharedModule } from "../../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { ManagePostsPage } from "./manage-posts-page/manage-posts.page";
import { LoggedInGuard } from "../../user/guard/logged-in.guard";
import { PostSharedModule } from "../post-shared/post-shared.module";
import { PostCommentModule } from "../post-comments/post-comment.module";

const routes: Routes = [
  { path: "", component: PostDashboardPage },
  { path: "posts/:id/consult", component: ConsultPostPage },
  { path: "posts/:id/edit", component: ConsultPostPage },
  { path: "posts/new", component: ConsultPostPage },
  {
    path: "posts",
    component: ManagePostsPage,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostSharedModule,
    PostCommentModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [PostDashboardPage, ConsultPostPage, ManagePostsPage],
})
export class PostPageModule {}
