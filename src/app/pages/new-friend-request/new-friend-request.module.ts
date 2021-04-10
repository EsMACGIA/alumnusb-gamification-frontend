import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbListModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbButtonModule,
  NbInputModule,
  NbCheckboxModule,
  NbSelectModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { NewFriendRequestComponent } from './new-friend-request.component';
import { NewFriendRequestService } from './new-friend-request-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      NbCardModule,
      NbListModule,
      NbAccordionModule,
      ThemeModule,
      NbSpinnerModule,
      FormsModule,
      ReactiveFormsModule,
      NbButtonModule,
      NbInputModule,
    ],
    declarations: [
      NewFriendRequestComponent,
    ],
    providers: [
      NewFriendRequestService,
    ],
})

export class NewFriendRequestModule {}
