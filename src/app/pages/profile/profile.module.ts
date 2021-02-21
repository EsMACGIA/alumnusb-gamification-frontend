import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';

@NgModule({

    imports: [
      NbCardModule,
      NbButtonModule,
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
