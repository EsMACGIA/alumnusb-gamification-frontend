import { NgModule } from '@angular/core';
import { NbCardModule, NbSpinnerModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FriendsRankingComponent } from './friends-ranking.component';
import { FriendsRankingService } from './friends-ranking.service';

@NgModule({

    imports: [
      NbCardModule,
      ThemeModule,
      NbInputModule,
      NbSpinnerModule,
      Ng2SmartTableModule,
    ],
    declarations: [
      FriendsRankingComponent,
    ],
    providers: [
      FriendsRankingService,
    ],
})

export class FriendsRankingModule {}
