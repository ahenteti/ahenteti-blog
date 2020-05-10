import { NgModule } from "@angular/core";

import { NavbarComponent } from "./navbar.component";
import { UserModule } from "../user/user.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule, UserModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
