import { Component } from "@angular/core";

@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.scss"],
})
export class AddProjectComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  ngOnInit() {
    this.breadCrumbItems = [{ label: "General" }, { label: "add" }];
  }
}
