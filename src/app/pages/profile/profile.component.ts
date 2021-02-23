import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  profileData = new ProfileModel();
  id: number;

  constructor(
    private nbDialogService: NbDialogService,
    private profileService: ProfileService) {
      this.id = Number(localStorage.getItem('userId'));
      this.getProfileData(this.id);
    }

  getProfileData(id) {
    this.profileService.getProfile(id).subscribe(data => {
      if (data) {
        this.profileData = data;
      }
    });
  }

  open() {
    this.nbDialogService.open(ProfileFormComponent, { closeOnBackdropClick: false , hasScroll: true})
    .onClose.subscribe(profile => {
      if (profile) {
        this.profileService.updateProfile(profile, this.id).subscribe(data => {
          if (data) {
            window.location.reload();
          }
        })
      }
    });
  }

}
