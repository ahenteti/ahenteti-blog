import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-router-link",
  templateUrl: "router-link.component.html",
  styleUrls: ["router-link.component.scss"],
})
export class RouterLinkComponent implements OnInit {
  @Input() routerLink: string;

  constructor() {}

  ngOnInit() {}
}
