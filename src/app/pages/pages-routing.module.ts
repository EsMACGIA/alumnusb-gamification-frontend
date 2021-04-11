import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { FriendsRankingComponent } from './friends-ranking/friends-ranking.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'my_profile',
      component: ProfileComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'my_achievements',
      component: AchievementsComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'my_stats',
      component: StatsComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'my_friends_ranking',
      component: FriendsRankingComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'upload-csv',
      component: UploadCsvComponent,
      canActivate: [ AuthGuard ],
      data: { admin: true},
    },
    {
      path: '',
      redirectTo: 'my_stats',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
