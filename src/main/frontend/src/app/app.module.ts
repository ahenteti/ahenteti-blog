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
import { WindowService } from "./modules/shared/services/window.service";
import { LoaderModule } from "./modules/loader/loader.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./modules/loader/loader.interceptor";
import { LoaderService } from "./modules/loader/loader.service";
import { AdminGuard } from "./modules/user/services/admin.guard";
import { FeedbackModule } from "./modules/feedback/feedback.module";
import { FeedbackConverter } from "./modules/feedback/services/feedback.converter";
import { FeedbackValidator } from "./modules/feedback/services/feedback.validator";
import { FeedbackHttpServices } from "./modules/feedback/services/feedback.http.services";
import { AlertService } from "./modules/alert/alert.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/post/post-pages/post-pages.module#PostPageModule",
  },
  {
    path: "",
    loadChildren: "./modules/user/user.module#UserModule",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LoaderModule,
    AlertModule,
    NavbarModule,
    PostPageModule,
    FeedbackModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  providers: [
    AlertService,
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
    WindowService,
    LoaderService,
    AdminGuard,
    FeedbackConverter,
    FeedbackValidator,
    FeedbackHttpServices,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class AppModule {}
