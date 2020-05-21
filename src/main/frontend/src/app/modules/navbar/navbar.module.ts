import { NgModule } from "@angular/core";

import { NavbarComponent } from "./components/navbar-container/navbar.component";
import { UserModule } from "../user/user.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { NavbarUserLinkComponent } from "./components/navbar-user-link/navbar-user-link.component";
import { NavbarLoginComponent } from "./components/navbar-login/navbar-login.component";

@NgModule({
  imports: [CommonModule, SharedModule, UserModule],
  exports: [NavbarComponent],
  declarations: [
    NavbarComponent,
    NavbarUserLinkComponent,
    NavbarLoginComponent,
  ],
  providers: [],
})
export class NavbarModule {}
