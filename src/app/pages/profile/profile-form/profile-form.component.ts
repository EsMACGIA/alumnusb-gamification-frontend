import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

import { ProfileModel } from '../profile.model';
import { countries } from '../../../../assets/data/countries';
import { undergrad_campus } from '../../../../assets/data/undergrad_campus';
import { undergrad_degree } from '../../../../assets/data/undergrad_degree';

@Component({
  selector: 'ngx-profile-form-prompt',
  templateUrl: 'profile-form.component.html',
  styleUrls: ['profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

  profileData: ProfileModel;
  profileEdit: ProfileModel = new ProfileModel();
  countries: any;
  undergrad_campus: any;
  undergrad_degree: any;

  constructor(
    protected ref: NbDialogRef<ProfileFormComponent>,
    ) {}

  ngOnInit() {
    Object.assign(this.profileEdit, this.profileData);
    const temp = this.profileEdit.birthdate.split('-');
    this.profileEdit.birthdate = new Date(temp[0], temp[1] - 1, temp[2]);
    this.countries = countries;
    this.undergrad_campus = undergrad_campus;
    this.undergrad_degree = undergrad_degree;
  }

  clean(obj) {
    for (const propName in obj) {
      if (obj[propName] === '' || obj[propName] === null) {
        delete obj[propName];
      }
    }
    return obj;
  }

  cancel() {
    this.ref.close();
  }

  submit(profile) {
    this.clean(this.profileEdit);
    if (this.profileEdit.birthdate)
      this.profileEdit.birthdate = this.profileEdit.birthdate.toISOString().split('T')[0];
    this.ref.close(profile);
  }
}
