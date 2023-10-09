import { Component } from "@angular/core";

@Component({
  selector: "app-webdev",
  templateUrl: "./webdev.component.html",
  styleUrls: ["./webdev.component.scss"],
})
export class WebdevComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  ngOnInit() {
    this.breadCrumbItems = [{ label: "WEB DEVELOPMENT" }];
  }
}
