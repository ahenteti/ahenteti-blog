import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { LoaderService } from "./loader.service";
import { finalize } from "rxjs/operators";
import { GET_CURRENT_IDENTITY_URL } from "../user/services/user.http-client";

const HTTP_REQUEST_WITHOUT_LOADER = [GET_CURRENT_IDENTITY_URL];

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  // prettier-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (HTTP_REQUEST_WITHOUT_LOADER.includes(req.url)) {
      return next.handle(req);
    } else {
      this.loaderService.show();
      return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
    }
  }
}
