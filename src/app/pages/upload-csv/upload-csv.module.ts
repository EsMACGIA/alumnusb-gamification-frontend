import { NgModule } from '@angular/core';
import { NbCardModule, NbListModule, NbButtonModule } from '@nebular/theme';

// Components
import { UploadCsvComponent } from './upload-csv.component';

import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbListModule,
    NbButtonModule,
  ],
  declarations: [
    UploadCsvComponent,
  ],
})
export class UploadCsvModule {
}
