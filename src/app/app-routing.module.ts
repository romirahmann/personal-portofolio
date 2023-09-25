import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { LandingPageComponent } from './pages/frontend/landing-page/landing-page.component';

// Auth
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent, loadChildren: () => import('./pages/frontend/frontend.module').then(m => m.FrontendModule)},
  { path: 'admin', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
