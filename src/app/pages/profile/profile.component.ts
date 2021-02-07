import { Component } from '@angular/core';
import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service'

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  profileData = new ProfileModel();
  id = 7;

  constructor(
    private profileService: ProfileService) {
    
    this.getData();
  }

  getData() {
    this.profileService.getProfile(this.id).subscribe(data => {
      if (data) {
        console.log(data)
      }
    })
  }
}
