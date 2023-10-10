import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HeaderComponent } from "./component/header/header.component";
import { MyServiceComponent } from './component/my-service/my-service.component';
import { GalleryPortoComponent } from './component/gallery-porto/gallery-porto.component';
import { SpecialistComponent } from './component/specialist/specialist.component';
import { ViewPortoComponent } from './component/view-porto/view-porto.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, MyServiceComponent, GalleryPortoComponent, SpecialistComponent, ViewPortoComponent],
  imports: [CommonModule, NgbCarouselModule, NgIf],
})
export class FrontendModule {}
