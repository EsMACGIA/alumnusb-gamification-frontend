import { NgModule } from '@angular/core';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { StatsComponent } from './stats.component';
import { StatsService } from './stats.service';

@NgModule({

    imports: [
      NbCardModule,
      ThemeModule,
      NbSpinnerModule,
    ],
    declarations: [
      StatsComponent,
    ],
    providers: [
      StatsService,
    ],
})

export class StatsModule {}
