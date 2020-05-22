import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { UsersPage } from "../../models/user.internal.models";
import { AlertService } from "src/app/modules/alert/alert.service";
import { UserHttpServices } from "../../services/user.http.services";
import { UserConverter } from "../../services/user.converter";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./manage-users.page.html",
  styleUrls: [
    "../../../shared/pages/manage-resources.page.scss",
    "./manage-users.page.scss",
  ],
})
export class ManageUsersPage implements OnInit {
  currentPage = new UsersPage();
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ["username", "joinAt", "actions"];
  previousButtonCssClasses$ = new Subject<string>();
  nextButtonCssClasses$ = new Subject<string>();
  filter = "";

  constructor(
    private alertService: AlertService,
    private userHttpService: UserHttpServices,
    private userConverter: UserConverter
  ) {}

  // prettier-ignore
  ngOnInit(): void {
    this.getNewPage(0);
  }

  handleNextButtonClickEvent() {
    this.getNewPage(this.currentPage.page + 1);
  }

  handlePreviousButtonClickEvent() {
    this.getNewPage(this.currentPage.page - 1);
  }

  // prettier-ignore
  private getNewPage(page: number) {
    const request  = this.userConverter.toGetUsersPageApiRequest(this.filter, page);
    this.userHttpService.getUsersPage(request)
      .then(usersPage => this.handleGetUsersPageSuccessEvent(usersPage))
      .catch(error => this.handleGetUsersPageErrorEvent(error));
  }

  private recalculatePreviousNextButtonCssClasses() {
    let classes = [];
    if (this.currentPage.firstPage) {
      classes.push("disabled");
    }
    this.previousButtonCssClasses$.next(classes.join(" "));
    classes = [];
    if (this.currentPage.lastPage) {
      classes.push("disabled");
    }
    this.nextButtonCssClasses$.next(classes.join(" "));
  }

  private handleGetUsersPageErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while fetching users :(");
  }

  private handleGetUsersPageSuccessEvent(usersPage: UsersPage) {
    this.currentPage = usersPage;
    this.dataSource = new MatTableDataSource(usersPage.items);
    this.recalculatePreviousNextButtonCssClasses();
  }
}
