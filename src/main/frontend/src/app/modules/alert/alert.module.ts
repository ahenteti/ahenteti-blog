import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert.component";
import { CommonModule } from "@angular/common";
import { CommonHttpServices } from "./common.http.services";

@NgModule({
  imports: [CommonModule],
  exports: [AlertComponent],
  declarations: [AlertComponent],
  providers: [],
})
export class AlertModule {}
