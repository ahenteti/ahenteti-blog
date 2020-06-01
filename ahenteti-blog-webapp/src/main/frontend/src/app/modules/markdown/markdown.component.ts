import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
import marked, { Renderer } from "marked";
import DOMPurify from "dompurify";
import { createRenderer } from "./marked-renderer.factory";
import {
  handleCodeTabClick,
  handleCopyCode,
  handleCopyCodeMouseLeave,
} from "./code.renderer";

@Component({
  selector: "app-markdown",
  template: '<div class="app-markdown" [innerHTML]="data"></div>',
  styleUrls: [
    "./markdown.component.scss",
    "./code.component.scss",
    "./text-with-icon.component.scss",
  ],
})
export class MarkdownComponent implements OnChanges {
  @Input() text: string;
  data: SafeHtml;
  md: any;

  constructor(private sanitizer: DomSanitizer, private el: ElementRef) {
    const renderer: Renderer = createRenderer();
    this.md = marked.setOptions({ renderer });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleMarkdownChanges(changes);
    this.handleCodeCopyClick();
  }

  private handleCodeCopyClick() {
    setTimeout(() => {
      document
        .querySelectorAll(".code-tabs span")
        .forEach((tab) => tab.addEventListener("click", handleCodeTabClick));
      document.querySelectorAll(".copy-code-container").forEach((tab) => {
        tab.addEventListener("click", handleCopyCode);
        tab.addEventListener("mouseleave", handleCopyCodeMouseLeave);
      });
    }, 0);
  }

  private handleMarkdownChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === "text") {
        const value = changes[propName].currentValue;
        if (value) {
          this.data = this.markdownToSafeHtml(value);
        }
      }
    }
  }

  markdownToSafeHtml(value: string): SafeHtml {
    const html = this.md(value);
    const safeHtml = DOMPurify.sanitize(html);
    return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
  }
}
