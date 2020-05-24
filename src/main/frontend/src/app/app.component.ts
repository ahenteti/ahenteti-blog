import { Component, OnInit } from "@angular/core";

import * as AOS from "aos";

@Component({
  selector: "app-root",
  template: /*html*/ `
    <app-navbar></app-navbar>
    <app-alert></app-alert>
    <app-loader></app-loader>
    <app-feedback></app-feedback>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }
}
