import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultPostPage } from "./consult-post/consult-post.page";
import { PostDashboardPage } from "./post-dashboard/post-dashboard.page";
import { SharedModule } from "../../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { ManagePostsComponent } from "./manage-posts/manage-posts.page";
import { LoggedInGuard } from "../../user/guard/logged-in.guard";
import { PostSharedModule } from "../post-shared/post-shared.module";
import { PostCommentModule } from "../post-comments/post-comment.module";

const routes: Routes = [
  { path: "", component: PostDashboardPage },
  { path: "posts/:id", component: ConsultPostPage },
  {
    path: "posts",
    component: ManagePostsComponent,
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
  declarations: [PostDashboardPage, ConsultPostPage, ManagePostsComponent],
})
export class PostPageModule {}
