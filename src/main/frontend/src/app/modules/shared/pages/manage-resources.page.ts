import { OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { AlertService } from "src/app/modules/alert/alert.service";
import { Subject } from "rxjs";
import { Page } from "../models/page.model";

export abstract class AbstractManageResourcesPage<T> implements OnInit {
  currentPage: Page<T>;
  dataSource = new MatTableDataSource([]);
  columns: string[];
  previousButtonCssClasses$ = new Subject<string>();
  nextButtonCssClasses$ = new Subject<string>();
  filter = "";

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.fetchPage(0);
  }

  handleNextButtonClickEvent() {
    this.fetchPage(this.currentPage.page + 1);
  }

  handlePreviousButtonClickEvent() {
    this.fetchPage(this.currentPage.page - 1);
  }

  // prettier-ignore
  abstract fetchPage(page: number): void;

  recalculatePreviousNextButtonCssClasses() {
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
}
