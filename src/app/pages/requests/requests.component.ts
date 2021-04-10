import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewFriendRequestService } from './new-friend-request/new-friend-request-service';
import { NewFriendRequestComponent } from './new-friend-request/new-friend-request.component';

@Component({
  selector: 'ngx-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  constructor(
    private nbDialogService:NbDialogService,
    private newFriendsRequestService:NewFriendRequestService,
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.nbDialogService.open(NewFriendRequestComponent, { closeOnBackdropClick: false , hasScroll: true, context: { newFriendsRequestService: this.newFriendsRequestService }})
  }

}
