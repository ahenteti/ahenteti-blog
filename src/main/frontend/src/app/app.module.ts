import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from "./modules/alert/alert.module";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { PostPageModule } from "./modules/post/post-pages/post-pages.module";
import { ThemeLocalStorageServices } from "./modules/shared/services/theme.localstorage.services";
import { UserHttpServices } from "./modules/user/services/user.http.services";
import { UserLoginServices } from "./modules/user/services/user.login.services";
import { UserObservable } from "./modules/user/services/user.observable";
import { UserConverter } from "./modules/user/services/user.converter";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "./modules/shared/shared.module";
import { LoggedInGuard } from "./modules/user/services/logged-in.guard";
import { PostHttpServices } from "./modules/post/post-shared/services/post.http.services";
import { PostConverter } from "./modules/post/post-shared/services/post.converter";
import { PostCommentConverter } from "./modules/post/post-comments/converter/post-comment.converter";
import { PostCommentHttpServices } from "./modules/post/post-comments/services/post-comment.http.service";
import { PostValidator } from "./modules/post/post-shared/services/post.validator";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/post/post-pages/post-pages.module#PostPageModule",
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
    LoggedInGuard,
    PostValidator,
  ],
})
export class AppModule {}
