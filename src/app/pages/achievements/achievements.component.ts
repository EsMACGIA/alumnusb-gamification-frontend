import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AchievementsModel } from './achievements.model';
import { AchievementsService } from './achievements.service';
import { medals } from '../../../assets/data/medals';

import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';

@Component({
  selector: 'ngx-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;

  userId: Number;
  loading = false;
  achievements = new AchievementsModel();
  medals: any;

  constructor(
    private achievementsService: AchievementsService,
    private authService: AuthService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit() {
    this.loadAchievements();
    this.medals = medals;
  }

  loadAchievements() {
    this.loading = true;
    this.userId = this.authService.userId;
    this.achievementsService.getAchievements(this.userId).subscribe(
      data => {
        if (data) {
          if (data.achieved) {
            this.achievements = data;
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
