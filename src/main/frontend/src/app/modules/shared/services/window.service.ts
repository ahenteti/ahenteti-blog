import { Injectable } from "@angular/core";

@Injectable()
export class WindowService {
  scrollToBottom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }
}
