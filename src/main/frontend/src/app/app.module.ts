import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from "./modules/alert/alert.module";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { PostPageModule } from "./modules/post-page/post-page.module";
import { PostHttpServices } from "./modules/post/services/post.http.services";
import { PostConverter } from "./modules/post/converters/post.converter";
import { PostCommentConverter } from "./modules/post-comment/converter/post-comment.converter";
import { PostCommentHttpServices } from "./modules/post-comment/services/post-comment.http.service";
import { ThemeLocalStorageServices } from "./modules/shared/services/theme.localstorage.services";
import { UserHttpServices } from "./modules/user/services/user.http.services";
import { UserLoginServices } from "./modules/user/services/user.login.services";
import { UserObservable } from "./modules/user/services/user.observable";
import { UserConverter } from "./modules/user/converter/user.converter";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "./modules/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/post-page/post-page.module#PostPageModule",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AlertModule,
    NavbarModule,
    PostPageModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  providers: [
    PostHttpServices,
    PostConverter,
    PostCommentConverter,
    PostCommentHttpServices,
    ThemeLocalStorageServices,
    UserHttpServices,
    UserLoginServices,
    UserObservable,
    UserConverter,
  ],
})
export class AppModule {}
