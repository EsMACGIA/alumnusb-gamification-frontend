import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;

  profileData: ProfileModel = new ProfileModel();
  id: number;
  loading = false;

  constructor(
    private nbDialogService: NbDialogService,
    private profileService: ProfileService,
    private toastrService: NbToastrService,
    ) {}

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

  editProfilePhoto(dialog: TemplateRef<any>) {
    this.nbDialogService.open(
      dialog);
  }

  selectProfilePhoto(photoId: string) {
    this.id = Number(localStorage.getItem('userId'));
    const updatedProfile = new ProfileModel();
    updatedProfile['picture'] = photoId;

    this.profileService.updateProfile(updatedProfile, this.id).subscribe(
      // On success
        (event: any) => {
            if (typeof (event) === 'object') {
              window.location.reload();
            }
          });
  }

  open() {
    this.nbDialogService.open(ProfileFormComponent, { closeOnBackdropClick: false , hasScroll: true, context: {profileData: this.profileData}})
    .onClose.subscribe(profile => {
      if (profile) {
        this.profileService.updateProfile(profile, this.id).subscribe(
          data => {
            if (data) {
              if (data.first_name) {
                this.getProfileData(this.id);
              } else if (data.error) {
                for (const error of data.error.error) {
                  this.showToast('danger', error, '');
                }
              }
            }
          },
          err => {
            this.showToast('danger', 'Hubo un error, intente de nuevo', '');
          },
        );
      }
    });
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.index += 1;
    this.toastrService.show(
      body,
      title,
      config);
  }
}
