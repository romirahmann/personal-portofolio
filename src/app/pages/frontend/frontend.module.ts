import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HeaderComponent } from "./component/header/header.component";
import { MyServiceComponent } from './component/my-service/my-service.component';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, MyServiceComponent],
  imports: [CommonModule],
})
export class FrontendModule {}
