import { NgModule } from '@angular/core';

// Components

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    LandingPageRoutingModule,

  ],
  declarations: [
    LandingPageComponent,
  ],
  providers: [
    AuthService,
  ],
})
export class LandingPageModule {
}
