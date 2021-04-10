import { Injectable } from '@angular/core';
import { BaseService } from '../../app.base.service';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService extends BaseService {

  getRequests(username): Observable<any> {
    return this.getBase('accounts/friend_requests/requesting_me/' + username, this.setHeaders());
  }

  acceptRequest(users: any, username): Observable<any> {
    return this.postBase(users, 'accounts/friend_requests/accept/' + username, this.setHeaders());
  }

  declineRequest(username): Observable<any> {
    return this.deleteBase({},'accounts/friend_requests/' + username, this.setHeaders());
  }
}
