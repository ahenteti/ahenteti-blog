import { Observable, of } from "rxjs";

export class CommonHttpServices {
  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
