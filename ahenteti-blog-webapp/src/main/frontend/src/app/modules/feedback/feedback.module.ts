import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedbackComponent } from "./components/feedback.component";
import { SharedModule } from "../shared/shared.module";
import { ManageFeedbacksPage } from "./pages/manage-feedbacks.page";
import { AdminGuard } from "../user/services/admin.guard";
import { Routes, RouterModule } from "@angular/router";
import { UserModule } from "../user/user.module";

const routes: Routes = [
  {
    path: "feedbacks",
    component: ManageFeedbacksPage,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RouterModule.forChild(routes),
  ],
  exports: [FeedbackComponent],
  declarations: [FeedbackComponent, ManageFeedbacksPage],
  providers: [],
})
export class FeedbackModule {}
