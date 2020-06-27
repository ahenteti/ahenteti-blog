import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfflinePost } from "../../post-shared/models/post.internal.models";
import { PostHttpClient } from "../../post-shared/services/post.http-client";

@Component({
  templateUrl: "./consult-post.page.html",
  styleUrls: ["./consult-post.page.scss"],
})
export class ConsultPostPage implements OnInit {
  slug: string;
  post = new OfflinePost();

  constructor(route: ActivatedRoute, private postHttpClient: PostHttpClient) {
    this.slug = route.snapshot.params["slug"];
  }

  ngOnInit(): void {
    this.postHttpClient.getPostBySlug(this.slug).then((post) => {
      this.post = post;
    });
  }
}
