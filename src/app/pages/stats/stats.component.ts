import { Component } from '@angular/core';

import { StatsModel } from './stats.model';
import { StatsService } from './stats.service';

@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
})

export class StatsComponent {

  userId: Number;
  loading = false;
  stats = new StatsModel();

  constructor(
    private statsService: StatsService,
    ) {
      this.userId = Number(localStorage.getItem('userId'));
      this.getUserStats(this.userId);
  }

  getUserStats(id) {
    this.loading = true;
    this.statsService.getStats(id).subscribe(data => {
      if (data) {
        this.stats = data;
      }
      this.loading = false;
    });
  }

}
