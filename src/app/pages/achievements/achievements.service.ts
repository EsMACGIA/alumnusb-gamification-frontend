import { Injectable } from '@angular/core';
import { BaseService } from '../../app.base.service';
import { Observable } from 'rxjs';

@Injectable()
export class AchievementsService extends BaseService {

    getAchievements(id): Observable<any> {
        return this.getBase('accounts/achievements/' + id, this.setHeaders());
    }
}
