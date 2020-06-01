import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { ManageUsersPage } from "./pages/manage-users/manage-users.page";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "./services/admin.guard";
import { SharedModule } from "../shared/shared.module";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  {
    path: "users",
    component: ManageUsersPage,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [UserAvatarComponent, UserComponent],
  declarations: [UserAvatarComponent, UserComponent, ManageUsersPage],
})
export class UserModule {}
