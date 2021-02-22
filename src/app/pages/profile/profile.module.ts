import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbTabsetModule,
  NbAccordionModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';

@NgModule({

    imports: [
      FormsModule,
      ReactiveFormsModule,
      NbCardModule,
      NbButtonModule,
      NbListModule,
      NbTabsetModule,
      NbAccordionModule,
      ThemeModule,
    ],
    declarations: [
      ProfileComponent,
    ],
    providers: [
      ProfileService,
    ],
})

export class ProfileModule {}
