import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { UsersPage, User } from "../../models/user.internal.models";
import { AlertService } from "src/app/modules/alert/alert.service";
import { UserHttpClient } from "../../services/user.http-client";
import { UserConverter } from "../../services/user.converter";
import { AbstractManageResourcesPage } from "src/app/modules/shared/pages/manage-resources.page";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component";

@Component({
  templateUrl: "./manage-users.page.html",
  styleUrls: ["./manage-users.page.scss"],
})
export class ManageUsersPage extends AbstractManageResourcesPage<User>
  implements OnInit {
  constructor(
    private alertService: AlertService,
    private userHttpClient: UserHttpClient,
    private userConverter: UserConverter,
    private dialog: MatDialog
  ) {
    super();
    this.currentPage = new UsersPage();
    this.dataSource = new MatTableDataSource([]);
    this.columns = ["id", "username", "provider", "joinAt", "actions"];
  }

  // prettier-ignore
  fetchPage(filter: string, page: number) {
    const request  = this.userConverter.toGetUsersPageApiRequest(filter, page);
    this.userHttpClient.getUsersPage(request)
      .then(usersPage => this.handleGetUsersPageSuccessEvent(usersPage))
      .catch(error => this.handleGetUsersPageErrorEvent(error));
  }

  // prettier-ignore
  deleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Do you confirm the deletion of this user ?",
      width: "340px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const request = this.userConverter.toDeleteUserApiRequest(user.id);
        this.userHttpClient.deleteUser(request)
          .then(() => this.handleDeleteUserSuccessEvent(user))
          .catch(error => this.handleDeleteUserErrorEvent(error));
      }
    });
  }

  private handleGetUsersPageErrorEvent(error) {
    this.userHttpClient.handleError(error, "Error while fetching users :(");
  }

  private handleDeleteUserErrorEvent(error) {
    this.userHttpClient.handleError(error, "Error while deleting user :(");
  }

  private handleGetUsersPageSuccessEvent(usersPage: UsersPage) {
    this.currentPage = usersPage;
    this.dataSource = new MatTableDataSource(usersPage.items);
    this.dataSource.sort = this.sort;
    this.recalculatePreviousNextButtonCssClasses();
  }

  // prettier-ignore
  private handleDeleteUserSuccessEvent(user: User) {
    this.alertService.info(`The user ${user.username} has been deleted with success`);
    this.dataSource.data = this.dataSource.data.filter(
      (u) => u.id !== user.id
    );
    this.dataSource._updateChangeSubscription(); // <-- Refresh the data source, reference: https://stackoverflow.com/questions/54744770/how-to-delete-particular-row-from-angular-material-table-which-doesnt-have-filte
  }
}
