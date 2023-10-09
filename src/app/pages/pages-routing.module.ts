import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { WebdevComponent } from "./admin/webdev/webdev.component";
import { AddProjectComponent } from "./admin/add-project/add-project.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "web-dev",
    component: WebdevComponent,
  },
  {
    path: "add-project",
    component: AddProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
