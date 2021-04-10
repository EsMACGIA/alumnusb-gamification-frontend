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
import { NewFriendRequestService } from './new-friend-request/new-friend-request-service';
import { NewFriendRequestComponent } from './new-friend-request/new-friend-request.component';
import { RequestsComponent } from './requests.component';

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
    NewFriendRequestService,
  ],
})
export class RequestsModule { }
