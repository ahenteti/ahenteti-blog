import { OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Page } from "../models/page.model";
import { MatSort } from "@angular/material/sort";

export abstract class AbstractManageResourcesPage<T> implements OnInit {
  currentPage: Page<T>;
  dataSource: MatTableDataSource<T>;
  columns: string[];
  previousButtonCssClasses = "";
  nextButtonCssClasses = "";
  filter = "";
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.fetchPage(this.filter, 0);
  }

  abstract fetchPage(filter: string, page: number): void;

  onFilter(filter) {
    this.filter = filter;
    this.fetchPage(this.filter, 0);
  }

  handleNextButtonClickEvent() {
    if (this.currentPage.lastPage) return;
    this.fetchPage(this.filter, this.currentPage.page + 1);
  }

  handlePreviousButtonClickEvent() {
    if (this.currentPage.firstPage) return;
    this.fetchPage(this.filter, this.currentPage.page - 1);
  }

  recalculatePreviousNextButtonCssClasses() {
    let classes = [];
    if (this.currentPage.firstPage) {
      classes.push("disabled");
    }
    this.previousButtonCssClasses = classes.join(" ");
    classes = [];
    if (this.currentPage.lastPage) {
      classes.push("disabled");
    }
    this.nextButtonCssClasses = classes.join(" ");
  }

  handleFetchPageSuccessEvent(page: Page<T>) {
    this.currentPage = page;
    this.dataSource = new MatTableDataSource(page.items);
    this.dataSource.sort = this.sort;
    this.recalculatePreviousNextButtonCssClasses();
  }
}
