import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostModule } from "./modules/posts/post.module";
import { SharedModule } from "./modules/shared/shared.module";
import { AlertModule } from "./modules/alert/alert.module";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { UserModule } from "./modules/user/user.module";
import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    AlertModule,
    NavbarModule,
    PostModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(private http: HttpClient) {
  //   this.http
  //     .post<any>("https://jsonplaceholder.typicode.com/posts", {
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     })
  //     .toPromise()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  //   this.http
  //     .post<any>("/secure-api/posts/1/comments", {
  //       value: "new comment at: " + new Date(),
  //     })
  //     .toPromise()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }
}
