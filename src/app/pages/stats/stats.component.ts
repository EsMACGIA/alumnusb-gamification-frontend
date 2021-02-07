import { Component } from '@angular/core';

import { StatsModel } from './stats.model';


@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
})

export class StatsComponent {

stats = {
    email: 'jean@gmail.com',
    average_gift: 0.0,
    largest_gift: 0.0,
    smallest_gift: 0.0,
    total_gifts: 0.0,
    best_gift_year_total: 0.0,
    best_gift_year: 0,
    first_gift_date: '2020-01-01',
    last_gift_date: '2020-01-01',
    total_number_of_gifts: 0,
    };

}
