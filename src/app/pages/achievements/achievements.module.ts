import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbListModule,
  NbAccordionModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AchievementsComponent } from './achievements.component';
import { AchievementsService } from './achievements.service';

@NgModule({

    imports: [
      NbCardModule,
      NbListModule,
      NbAccordionModule,
      ThemeModule,
    ],
    declarations: [
      AchievementsComponent,
    ],
    providers: [
      AchievementsService,
    ],
})

export class AchievementsModule {}
