import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MENU_ADMIN, MENU_USUARIO } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_USUARIO;

  constructor(
    private auth: AuthService
  ) {


    if (this.auth.isAdmin()) {
      this.menu = MENU_ADMIN;
    } else {
      this.menu = MENU_USUARIO;
    }

  }
}