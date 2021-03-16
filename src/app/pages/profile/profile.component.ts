import { Component } from '@angular/core';
import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  profileData = new ProfileModel();
  id: number;
  loading = false;

  constructor(
    private profileService: ProfileService) {
    this.id = Number(localStorage.getItem('userId'));
    this.getData();
  }

  getData() {
    this.loading = true;
    this.profileService.getProfile(this.id).subscribe(data => {
      if (data) {
        this.profileData = data;
      }
      this.loading = false;
    });
  }
}
