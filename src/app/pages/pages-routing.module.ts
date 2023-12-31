import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { AddProjectComponent } from "./admin/add-project/add-project.component";
import { ListProjectComponent } from "./admin/list-project/list-project.component";
import { AddImageComponent } from "./admin/add-image/add-image.component";

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
    path: "project-list",
    component: ListProjectComponent,
  },
  {
    path: "add-project",
    component: AddProjectComponent,
  },
  {
    path: "add-image",
    component: AddImageComponent,
  },
  // {
  //   path: "view/:project_id",
  //   component: ViewPortoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
