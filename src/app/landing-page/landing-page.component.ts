/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
 */
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';
import Chart from 'chart.js';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ngx-landingpage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  private alive = true;
  isAuthenticated: boolean = false;

  constructor(
    private spinner$: NbSpinnerService,
    public authService: AuthService,
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // To change header dinamically add .add/.remove(bg-*)
    if (window.pageYOffset > 100) {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
      }
    } else {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
      }
    }
  }

  ngOnInit() {
    this.spinner$.load();
    this.onWindowScroll(event);
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    this.isAuthenticated = this.authService.isAuthenticated();
  }
  ngOnDestroy() {
    this.alive = false;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
