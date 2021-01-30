import { Injectable } from '@angular/core';
import { BaseService } from '../app.base.service';
import { BehaviorSubject, Observable } from 'rxjs';

import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';


import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  // public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    http: HttpClient
    ) {
      super(http);
      // this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      // this.currentUser = this.currentUserSubject.asObservable();
  }

  login(login: LoginModel):Observable<any> {
    return this.postBase(login, 'accounts/login/')
  }
  register(register: RegisterModel):Observable<any> {
    return this.postBase(register, 'accounts/register/')
  }

  logout() {
    localStorage.removeItem('currentToken');
    // localStorage.removeItem('currentUser');
  }
}