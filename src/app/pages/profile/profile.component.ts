import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profileData: ProfileModel = new ProfileModel();
  id: number;
  loading = false;

  constructor(
    private nbDialogService: NbDialogService,
    private profileService: ProfileService) {}

  ngOnInit() {
    this.id = Number(localStorage.getItem('userId'));
    this.getProfileData(this.id);
  }

  getProfileData(id) {
    this.loading = true;
    this.profileService.getProfile(this.id).subscribe(data => {
      if (data) {
        this.profileData = data;
      }
      this.loading = false;
    });
  }

  open() {
    this.nbDialogService.open(ProfileFormComponent, { closeOnBackdropClick: false , hasScroll: true, context: {profileData: this.profileData}})
    .onClose.subscribe(profile => {
      if (profile) {
        this.profileService.updateProfile(profile, this.id).subscribe(data => {
          if (data) {
            this.getProfileData(this.id);
          }
        });
      }
    });
  }

}
