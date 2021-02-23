import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

import { ProfileModel } from '../profile.model';

@Component({
  selector: 'profile-form-prompt',
  templateUrl: 'profile-form.component.html',
  styleUrls: ['profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

  profileEdit: ProfileModel = new ProfileModel();

  constructor(
    protected ref: NbDialogRef<ProfileFormComponent>,
    ) {}

  ngOnInit(): void {

  }

  cancel() {
    this.ref.close();
  }

  submit(profile) {
    if (this.profileEdit.birthdate)
      this.profileEdit.birthdate = this.profileEdit.birthdate.toISOString().split('T')[0];
    this.ref.close(profile);
  }
}
