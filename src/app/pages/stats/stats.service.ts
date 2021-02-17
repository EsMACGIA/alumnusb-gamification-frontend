import { Injectable } from '@angular/core';
import { BaseService} from '../../app.base.service';
import { Observable } from 'rxjs';

@Injectable()
export class StatsService extends BaseService {

    getStats(id): Observable<any> {
        return this.getBase('accounts/stats/' + id, this.setHeaders());
    }

}
