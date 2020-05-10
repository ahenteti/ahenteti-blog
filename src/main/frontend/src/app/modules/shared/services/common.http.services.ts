import { Observable, of } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

export class CommonHttpServices {
  protected jsonContentTypeOption = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  protected handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
