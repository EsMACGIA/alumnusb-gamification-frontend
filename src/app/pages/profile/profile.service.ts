import { Injectable } from '@angular/core';
import { BaseService } from '../../app.base.service';
import { Observable } from 'rxjs';
import { ProfileModel } from './profile.model';

@Injectable()
export class ProfileService extends BaseService{

    getProfile(id): Observable<any>{
        return this.getBase('accounts/profiles/' + id, this.setHeaders());
    }

    updateProfile(profile: ProfileModel, id): Observable<any> {
        return this.putBase(profile, 'accounts/profiles/' + id, this.setHeaders());
    }
}
