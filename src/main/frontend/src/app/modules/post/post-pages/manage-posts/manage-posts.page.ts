import { Component, OnInit } from "@angular/core";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsSummaries } from "../../post-shared/models/post.internal.models";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";

@Component({
  templateUrl: "manage-posts.page.html",
  styleUrls: ["manage-posts.page.scss"],
})
export class ManagePostsPage extends AnimatedLoadingPage implements OnInit {
  userPosts = new PostsSummaries();
  currentUserPostsPage = -1;
  constructor(private postHttpServices: PostHttpServices) {
    super();
  }

  ngOnInit() {
    this.postHttpServices
      .getUserPosts(++this.currentUserPostsPage)
      .then((posts) => {
        this.userPosts = posts;
        this.hideLoader();
      });
  }
}
