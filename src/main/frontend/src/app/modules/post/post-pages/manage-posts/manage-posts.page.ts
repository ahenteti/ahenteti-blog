import { Component, OnInit, ViewChild } from "@angular/core";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsSummaries } from "../../post-shared/models/post.internal.models";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  templateUrl: "manage-posts.page.html",
  styleUrls: ["manage-posts.page.scss"],
})
export class ManagePostsPage extends AnimatedLoadingPage implements OnInit {
  userPosts = new MatTableDataSource(new PostsSummaries());
  currentUserPostsPage = -1;
  displayedColumns: string[] = ["title", "category", "createdAt"];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postHttpServices: PostHttpServices) {
    super();
  }

  ngOnInit() {
    this.postHttpServices
      .getUserPosts(++this.currentUserPostsPage)
      .then((posts) => {
        this.userPosts = new MatTableDataSource(posts);
        this.userPosts.sort = this.sort;
        this.hideLoader();
      });
  }
}
