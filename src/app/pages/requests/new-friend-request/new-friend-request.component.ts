import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { NewFriendRequestService } from './new-friend-request-service';

import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition, NbDialogService, NbDialogRef} from '@nebular/theme';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'ngx-new-friend-request',
  templateUrl: './new-friend-request.component.html',
  styleUrls: ['./new-friend-request.component.scss'],
})
export class NewFriendRequestComponent implements OnInit {

  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;
  friendUsername:string;
  showErrorEmpty:boolean = false;
  loading = false;
  newFriendsRequestService:NewFriendRequestService

  constructor(
    protected ref: NbDialogRef<NewFriendRequestComponent>,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit() {}

  submit() {
    if (this.friendUsername)
    this.ref.close(this.friendUsername);
  }

  cancel(){
    this.ref.close();
  }

  sendInviteFriend() {
    if (this.friendUsername){
      this.loading = true;
      this.showErrorEmpty = false;
      this.newFriendsRequestService.sendInvitation(this.friendUsername).subscribe(
        data => {
          if (data && !data.error) {
            this.showToast('success', `Solicitud enviada con éxito al usuario ${this.friendUsername}`, '');
            this.ref.close();
          } else if (data.error) {
            for (const error of data.error.error) {
              this.showToast('danger', error, '');
            }
          }
          this.loading = false;
        },
        err => {
          this.showToast('danger', 'Hubo un error, intente de nuevo', '');
        },
      );
    }else{
      this.showErrorEmpty = true;
    }
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
