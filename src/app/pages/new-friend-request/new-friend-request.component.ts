import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NewFriendRequestService } from './new-friend-request-service';

import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition, NbDialogService} from '@nebular/theme';

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
  loading = false;

  constructor(
    private newFriendsRequestService: NewFriendRequestService,
    private authService: AuthService,
    private toastrService: NbToastrService,
    private nbDialogService : NbDialogService,
  ) {}

  ngOnInit() {}

  sendInviteFriend() {
    this.loading = true;
    this.newFriendsRequestService.sendInvitation(this.friendUsername).subscribe(
      data => {
        console.log(data);
        if (data && !data.error) {
          if (data.achieved) {
            this.showToast('success', `Solicitud enviada con éxito al usuario ${this.friendUsername}`, '');
          }
        } else if (data.error && data.status == 404) {
          this.showToast('danger', `No se ha encontrado al usuario ${this.friendUsername}`, '');
        }
        else if (data.error && data.status == 400) {
          this.showToast('danger', `Ya has enviado una solicitud de amistad al usuario ${this.friendUsername}`, '');
        }
        this.loading = false;
      },
      err => {
        this.showToast('danger', 'Hubo un error, intente de nuevo', '');
      },
    );
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

  cancel(){
    return
  }

  open() {
    this.nbDialogService.open(NewFriendRequestComponent, { closeOnBackdropClick: false , hasScroll: true})
    // .onClose.subscribe(profile => {
    //   if (profile) {
    //     this.profileService.updateProfile(profile, this.id).subscribe(
    //       data => {
    //         if (data) {
    //           if (data.first_name) {
    //             this.getProfileData(this.id);
    //           } else if (data.error) {
    //             for (const error of data.error.error) {
    //               this.showToast('danger', error, '');
    //             }
    //           }
    //         }
    //       },
    //       err => {
    //         this.showToast('danger', 'Hubo un error, intente de nuevo', '');
    //       },
    //     );
    //   }
    // });
  }
}
