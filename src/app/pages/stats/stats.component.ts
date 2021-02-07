import { Component } from '@angular/core';

import { StatsModel } from './stats.model';
import { StatsService } from './stats.service';


@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
})

export class StatsComponent {

  userId: Number;
  stats = new StatsModel();

  constructor(
    private statsService: StatsService,
    ) {
      this.userId = Number(localStorage.getItem('userId'));
      this.getData(this.userId);
  }

  getData(id) {
    this.statsService.getStats(id).subscribe(data => {
      if (data) {
        this.stats = data;
      }
    });
  }
}
