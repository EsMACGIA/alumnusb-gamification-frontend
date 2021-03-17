import { Injectable } from '@angular/core';
import { BaseService } from '../app.base.service';
import { BehaviorSubject, Observable } from 'rxjs';

import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  public userId: number;

  constructor(
    http: HttpClient,
    router: Router,
    ) {
      super(http,router);
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
    if (localStorage.getItem('currentToken')){
      const tokenParts = localStorage.getItem('currentToken').split(/\./);
      const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));
      const tokenDate = new Date(tokenDecoded.exp * 1000);
      const currentDate = new Date();
      return tokenDate > currentDate;
    }
    return false;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') == 'true';
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
