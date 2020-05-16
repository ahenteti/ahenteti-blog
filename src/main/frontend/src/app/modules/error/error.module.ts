import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogErrorHandler } from "./error.handler";

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: BlogErrorHandler,
    },
  ],
})
export class ErrorModule {}
