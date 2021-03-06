import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbIconModule,
  NbTreeGridModule,
  NbButtonModule,
  NbRadioModule,
  NbSelectModule,
  NbDialogModule,
  NbActionsModule,
  NbSpinnerModule,
  NbLayoutModule,
  NbInputModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { NewFriendRequestComponent } from './new-friend-request/new-friend-request.component';
import { RequestsComponent } from './requests.component';

import { RequestsService } from './requests.service';

@NgModule({
  declarations: [
    RequestsComponent,
    NewFriendRequestComponent,
  ],
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbTreeGridModule,
    NbButtonModule,
    NbRadioModule,
    NbSelectModule,
    NbDialogModule,
    NbActionsModule,
    NbSpinnerModule,
    NbLayoutModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
  ],
  providers: [
    RequestsService,
  ],
})
export class RequestsModule { }
