import { NgModule } from '@angular/core';
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
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { RequestsComponent } from './requests.component';

import { RequestsService } from './requests.service';

@NgModule({
  declarations: [RequestsComponent],
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
  ],
  providers: [
    RequestsService,
  ],
})
export class RequestsModule { }
