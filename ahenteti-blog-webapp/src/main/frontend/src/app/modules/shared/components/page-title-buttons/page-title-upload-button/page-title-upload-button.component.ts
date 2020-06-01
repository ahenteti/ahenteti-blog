import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-page-title-upload-button",
  template: `
    <label for="file-upload">
      <app-page-title-button
        icon="heroicons-solid:upload"
      ></app-page-title-button>
    </label>
    <input id="file-upload" (change)="onChange($event)" type="file" />
  `,
  styles: [
    `
      input[type="file"] {
        display: none;
      }
    `,
  ],
})
export class PageTitleUploadButtonComponent {
  @Output() fileUpload = new EventEmitter<File>();

  onChange(event) {
    this.fileUpload.emit(event.target.files[0]);
  }
}
