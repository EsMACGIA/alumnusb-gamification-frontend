import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StatsModule } from './stats/stats.module';
import { ProfileModule } from './profile/profile.module';
import { AchievementsModule } from './achievements/achievements.module';
import { FriendsRankingModule } from './friends-ranking/friends-ranking.module';
import { UploadCsvModule } from './upload-csv/upload-csv.module';
import { RequestsModule } from './requests/requests.module'

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ProfileModule,
    StatsModule,
    AchievementsModule,
    FriendsRankingModule,
    UploadCsvModule,
    RequestsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
