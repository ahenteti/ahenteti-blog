import { NgModule } from "@angular/core";

import { NavbarComponent } from "./navbar.component";
import { UserModule } from "../user/user.module";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, UserModule, MatMenuModule, SharedModule],
  exports: [UserModule, NavbarComponent, MatMenuModule, SharedModule],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
