import { Component, TemplateRef } from '@angular/core';
import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  profileData = new ProfileModel();
  id: number;

  constructor(
    private profileService: ProfileService,
    private dialogService: NbDialogService) {
    this.id = Number(localStorage.getItem('userId'));
    this.getData();
  }

  getData() {
    this.profileService.getProfile(this.id).subscribe(data => {
      if (data) {
        this.profileData = data;
      }
    });
  }

  editProfilePhoto(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog);
  }

  selectProfilePhoto(photoId: string) {
    this.id = Number(localStorage.getItem('userId'));
    let updatedProfile = new ProfileModel();
    updatedProfile['picture'] = photoId;

    this.profileService.updateProfile(updatedProfile, this.id).subscribe(
      // On success
        (event: any) => {
            if (typeof (event) === 'object') {
              window.location.reload();
            }
          });
  }
}
