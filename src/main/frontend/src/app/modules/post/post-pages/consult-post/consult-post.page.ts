import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  IPost,
  OfflinePost,
} from "../../post-shared/models/post.internal.models";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { LoaderComponent } from "src/app/modules/shared/components/loader/loader.component";

@Component({
  templateUrl: "./consult-post.page.html",
  styleUrls: ["./consult-post.page.scss"],
})
export class ConsultPostPage implements OnInit {
  postId: number;
  post = new OfflinePost();
  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;

  constructor(
    route: ActivatedRoute,
    private postHttpServices: PostHttpServices
  ) {
    this.postId = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.postHttpServices.getPostById(this.postId).then((post) => {
      this.post = post;
      this.loader.hide();
    });
  }
}
