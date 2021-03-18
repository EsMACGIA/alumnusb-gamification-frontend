import { Component } from '@angular/core';

import { StatsModel } from './stats.model';
import { StatsService } from './stats.service';

import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';

@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
})

export class StatsComponent {
  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;

  userId: Number;
  loading = false;
  stats = new StatsModel();

  constructor(
    private statsService: StatsService,
    private toastrService: NbToastrService,
    ) {
      this.userId = Number(localStorage.getItem('userId'));
      this.getUserStats(this.userId);
  }

  getUserStats(id) {
    this.loading = true;
    this.statsService.getStats(id).subscribe(data => {
      if (data) {
        if (data.email) {
          this.stats = data;
        }
      } else if (data.error) {
        for (const error of data.error.error) {
          this.showToast('danger', error, '');
        }
      }
      this.loading = false;
    },
    err => {
      this.showToast('danger', 'Hubo un error, intente de nuevo', '');
    },
    );
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.index += 1;
    this.toastrService.show(
      body,
      title,
      config);
  }
}
