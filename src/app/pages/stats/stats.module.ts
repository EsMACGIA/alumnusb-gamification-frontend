import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { StatsComponent } from './stats.component';

@NgModule({

    imports: [
      NbCardModule,
      ThemeModule,
    ],
    declarations: [
      StatsComponent,
    ],
})

export class StatsModule {}
