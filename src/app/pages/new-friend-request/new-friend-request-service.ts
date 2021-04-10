import { Injectable } from '@angular/core';
import { BaseService } from '../../app.base.service';
import { Observable } from 'rxjs';

@Injectable()
export class NewFriendRequestService extends BaseService {

    sendInvitation(username:string): Observable<any> {
        return this.postBase(`accounts/friend_requests/${username}`, this.setHeaders());
    }

}
