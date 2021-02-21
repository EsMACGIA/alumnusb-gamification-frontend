import { NgModule } from '@angular/core';
import { NbCardModule, NbListModule } from '@nebular/theme';

// Components
import { UploadCsvComponent } from './upload-csv.component';

import { ThemeModule } from '../../@theme/theme.module';

// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // RouterModule,
    // CollapseModule.forRoot(),
    NbCardModule,
    ThemeModule,
    NbListModule,
  ],
  declarations: [
    UploadCsvComponent,
  ],
})
export class UploadCsvModule {
}
