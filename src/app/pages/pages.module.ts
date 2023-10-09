import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  NgbToastModule,
  NgbProgressbarModule,
} from "@ng-bootstrap/ng-bootstrap";

import { FlatpickrModule } from "angularx-flatpickr";
import { CountToModule } from "angular-count-to";
import { NgApexchartsModule } from "ng-apexcharts";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";

// Swiper Slider
import { NgxUsefulSwiperModule } from "ngx-useful-swiper";

import { LightboxModule } from "ngx-lightbox";

// Load Icons
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { ToastsContainer } from "./dashboards/dashboard/toasts-container.component";
import { DashboardsModule } from "./dashboards/dashboards.module";
import { WebdevComponent } from './admin/webdev/webdev.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';

@NgModule({
  declarations: [DashboardComponent, ToastsContainer, WebdevComponent, AddProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    SharedModule,
    NgxUsefulSwiperModule,
    LightboxModule,
    DashboardsModule,
  ],
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
