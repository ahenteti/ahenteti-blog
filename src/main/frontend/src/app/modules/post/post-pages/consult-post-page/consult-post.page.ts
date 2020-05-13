import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfflinePost } from "../../post-shared/models/post.internal.models";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";

@Component({
  templateUrl: "./consult-post.page.html",
  styleUrls: ["./consult-post.page.scss"],
})
export class ConsultPostPage extends AnimatedLoadingPage implements OnInit {
  postId: number;
  post = new OfflinePost();

  constructor(
    route: ActivatedRoute,
    private postHttpServices: PostHttpServices
  ) {
    super();
    this.postId = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.postHttpServices.getPostById(this.postId).then((post) => {
      this.post = post;
      this.hideLoader();
    });
  }
}
