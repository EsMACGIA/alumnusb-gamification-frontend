import { Injectable } from '@angular/core';
import { BaseService } from '../app.base.service';
import { BehaviorSubject, Observable } from 'rxjs';

import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  public userId: number;

  constructor(
    http: HttpClient,
    ) {
      super(http);
      this.userId = Number(localStorage.getItem('userId'));
  }

  login(login: LoginModel): Observable<any> {
    return this.postBase(login, 'accounts/login/');
  }
  register(register: RegisterModel): Observable<any> {
    return this.postBase(register, 'accounts/register/');
  }

  logout() {
    localStorage.removeItem('currentToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('isAdmin');
  }

  isAuthenticated() {
    return localStorage.getItem('currentToken') != null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') == "true";
  }

  getUserInfo() {
    return {
      userId: localStorage.getItem('userId'),
      currentToken: localStorage.getItem('currentToken'),
      email: localStorage.getItem('email'),
      isAdmin: localStorage.getItem('isAdmin'),
      username: localStorage.getItem('username'),
    };
  }
}
