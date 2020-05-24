import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { UsersPage, User } from "../../models/user.internal.models";
import { AlertService } from "src/app/modules/alert/alert.service";
import { UserHttpServices } from "../../services/user.http.services";
import { UserConverter } from "../../services/user.converter";
import { AbstractManageResourcesPage } from "src/app/modules/shared/pages/manage-resources.page";

@Component({
  templateUrl: "./manage-users.page.html",
  styleUrls: ["./manage-users.page.scss"],
})
export class ManageUsersPage extends AbstractManageResourcesPage<User>
  implements OnInit {
  constructor(
    private alertService: AlertService,
    private userHttpService: UserHttpServices,
    private userConverter: UserConverter
  ) {
    super();
    this.currentPage = new UsersPage();
    this.dataSource = new MatTableDataSource([]);
    this.columns = ["username", "provider", "joinAt", "actions"];
  }

  // prettier-ignore
  fetchPage(filter: string, page: number) {
    const request  = this.userConverter.toGetUsersPageApiRequest(filter, page);
    this.userHttpService.getUsersPage(request)
      .then(usersPage => this.handleGetUsersPageSuccessEvent(usersPage))
      .catch(error => this.handleGetUsersPageErrorEvent(error));
  }

  deleteUser(user: User) {
    console.log(user);
    this.alertService.error("Delete functionality not yet implemented");
  }

  private handleGetUsersPageErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while fetching users :(");
  }

  private handleGetUsersPageSuccessEvent(usersPage: UsersPage) {
    this.currentPage = usersPage;
    this.dataSource = new MatTableDataSource(usersPage.items);
    this.dataSource.sort = this.sort;
    this.recalculatePreviousNextButtonCssClasses();
  }
}
