import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { RequestModel } from './request.model';
import { RequestsService } from './requests.service';
import { AuthService } from '../../auth/auth.service';
import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';
import { NewFriendRequestComponent } from './new-friend-request/new-friend-request.component';

@Component({
  selector: 'ngx-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;

  loading = false;
  user: any;
  requests: RequestModel[];

  // Settings for Smart Table
  settings = {
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
    },
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-checkmark"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-close"></i>',
      confirmDelete: true,
    },
    columns: {
      username: {
        title: 'Nombre de Usuario',
        type: 'string',
      },
      request_date: {
        title: 'Fecha',
        type: 'string',
      },
    },
    hideSubHeader: true,
    noDataMessage: 'No tienes solicitudes de amistad',
  };

  constructor(
    private nbDialogService: NbDialogService,
    private requestService: RequestsService,
    private toastrService: NbToastrService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  source: LocalDataSource = new LocalDataSource();

  getRequests() {
    this.loading = true;
    this.user = this.authService.getUserInfo();
    this.requestService.getRequests(this.user.username).subscribe(
      data => {
        if (data) {
          this.requests = data.requesting_users;
          this.source.load(this.requests);
        } else if (data.error) {
          for (const error of data.error.error) {
            this.showToast('danger', error, '');
          }
        }
        this.loading = false;
    });
  }

  acceptRequest(event) {
    const users = {
      username_a: this.user.username,
      username_b: event.data.username,
    };
    this.requestService.acceptRequest(users, this.user.username).subscribe(
      data => {
        if (data && !data.error) {
          this.showToast('success', `Solicitud aceptada con éxito al usuario ${event.data.username}`, '');
        } else if (data.error) {
          for (const error of data.error.error) {
            this.showToast('danger', error, '');
          }
        }
        this.getRequests();
      },
      err => {
        this.showToast('danger', 'Hubo un error, intente de nuevo', '');
      },
    );
  }

  declineRequest(event) {
    this.requestService.declineRequest(event.data.username).subscribe(
      data => {
        if (data && !data.error) {
          this.showToast('success', `Solicitud de ${event.data.username} rechazada`, '');
        } else if (data.error) {
          for (const error of data.error.error) {
            this.showToast('danger', error, '');
          }
        }
        this.getRequests();
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

  openModal() {
    const modal_info = {
      closeOnBackdropClick: false ,
      hasScroll: true,
      context:
        { newFriendsRequestService: this.requestService },
    };
    this.nbDialogService.open(NewFriendRequestComponent, modal_info);
  }

}
