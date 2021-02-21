import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbListModule, NbButtonModule } from '@nebular/theme';

// Components
import { UploadCsvComponent } from './upload-csv.component';
import { UploadCsvService } from './upload-csv.service';

import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbListModule,
    NbButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UploadCsvComponent,
  ],
  providers: [
    UploadCsvService,
  ],
})
export class UploadCsvModule {
}
