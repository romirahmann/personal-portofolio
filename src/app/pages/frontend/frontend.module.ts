import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrontendModule { }
