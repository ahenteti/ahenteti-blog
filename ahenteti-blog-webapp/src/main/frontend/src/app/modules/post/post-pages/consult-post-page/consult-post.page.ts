import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfflinePost } from "../../post-shared/models/post.internal.models";
import { PostHttpClient } from "../../post-shared/services/post.http-client";

@Component({
  templateUrl: "./consult-post.page.html",
  styleUrls: ["./consult-post.page.scss"],
})
export class ConsultPostPage implements OnInit {
  postId: number;
  post = new OfflinePost();

  constructor(route: ActivatedRoute, private postHttpClient: PostHttpClient) {
    this.postId = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.postHttpClient.getPostById(this.postId).then((post) => {
      this.post = post;
    });
  }
}
