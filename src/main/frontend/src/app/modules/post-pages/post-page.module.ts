import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultPostPage } from "./consult-post/consult-post.page";
import { PostDashboardPage } from "./post-dashboard/post-dashboard.page";
import { PostModule } from "../post/post.module";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: PostDashboardPage },
  { path: "consult-post/:id", component: ConsultPostPage },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostModule,
    RouterModule.forChild(routes),
  ],
  exports: [ConsultPostPage, PostDashboardPage],
  declarations: [ConsultPostPage, PostDashboardPage],
})
export class PostPageModule {}
