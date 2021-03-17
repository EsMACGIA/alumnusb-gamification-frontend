import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbTabsetModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbInputModule,
  NbCheckboxModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
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
      NbDatepickerModule,
      NbInputModule,
      NbCheckboxModule,
      NbSelectModule,
      ThemeModule,
      NbSpinnerModule,
    ],
    declarations: [
      ProfileComponent,
      ProfileFormComponent,
    ],
    providers: [
      ProfileService,
    ],
})

export class ProfileModule {}
