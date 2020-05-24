import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedbackComponent } from "./feedback.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [FeedbackComponent],
  declarations: [FeedbackComponent],
  providers: [],
})
export class FeedbackModule {}
