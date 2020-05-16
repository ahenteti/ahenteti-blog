import { ErrorHandler, Injectable } from "@angular/core";
import { ValidationError } from "./validation.error";
import { AlertService } from "../alert/alert.service";

@Injectable()
export class BlogErrorHandler implements ErrorHandler {
  constructor(private alertService: AlertService) {}
  handleError(error: Error) {
    console.error(error);
    if (ValidationError) {
      this.alertService.error(error.message);
    }
  }
}
