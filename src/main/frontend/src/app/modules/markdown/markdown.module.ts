import { NgModule } from "@angular/core";

import { MarkdownComponent } from "./markdown.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [MarkdownComponent],
  declarations: [MarkdownComponent],
  providers: [],
})
export class MarkdownModule {}
