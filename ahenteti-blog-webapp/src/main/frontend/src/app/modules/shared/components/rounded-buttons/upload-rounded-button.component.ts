import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-upload-rounded-button",
  template: `
    <label for="file-upload">
      <app-rounded-button icon="heroicons-solid:upload"></app-rounded-button>
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
export class UploadRoundedButtonComponent {
  @Output() fileUpload = new EventEmitter<File>();

  onChange(event) {
    this.fileUpload.emit(event.target.files[0]);
  }
}
