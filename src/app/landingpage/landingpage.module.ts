import { NgModule } from '@angular/core';

// Components

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';

import { CollapseModule } from "ngx-bootstrap/collapse";
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    CollapseModule.forRoot(),
    LandingpageRoutingModule,

  ],
  declarations: [
    LandingpageComponent,
  ],
})
export class LandingPageModule {
}
