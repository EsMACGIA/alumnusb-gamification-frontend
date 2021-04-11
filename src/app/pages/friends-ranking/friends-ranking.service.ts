import { Injectable } from '@angular/core';
import { BaseService} from '../../app.base.service';
import { Observable } from 'rxjs';

@Injectable()
export class FriendsRankingService extends BaseService {

    getFriendsRanking(id): Observable<any> {
        return this.getBase('accounts/friends_ranking/' + id, this.setHeaders());
    }
}
