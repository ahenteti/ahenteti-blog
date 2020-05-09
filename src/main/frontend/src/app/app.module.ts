import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostModule } from "./modules/posts/post.module";
import { SharedModule } from "./modules/shared/shared.module";
import { AlertModule } from "./modules/alert/alert.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PostModule,
    AlertModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
