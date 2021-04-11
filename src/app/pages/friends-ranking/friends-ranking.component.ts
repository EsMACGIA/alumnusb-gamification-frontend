import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { LocalDataSource } from 'ng2-smart-table';

import { FriendsRankingService } from './friends-ranking.service';
import { FriendsRankingModel } from './friends-ranking.model';

import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';

@Component({
  selector: 'ngx-friends-ranking',
  templateUrl: './friends-ranking.html',
})

export class FriendsRankingComponent implements OnInit {
  userId: Number;
  source: LocalDataSource = new LocalDataSource();
  friends: FriendsRankingModel[];

  constructor(
    private authService: AuthService,
    private friendsRankingService: FriendsRankingService,
    private toastrService: NbToastrService,
    ) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    this.loadFriends();
  }

  destroyByClick = false;
  duration = 4000;
  hasIcon = true;
  preventDuplicates = false;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  index = 1;

  loading: boolean = false;

  settings = {
    actions: false,
    hideSubHeader: true,
    noDataMessage: 'No tienes ningún amigo :(',
    columns: {
      ranking: {
        title: 'Posición',
        type: 'number',
        filter: false,
      },
      username: {
        title: 'Nombre de Usuario',
        type: 'string',
      },
      total_achievements: {
        title: 'Logros Conseguidos',
        type: 'number',
        filter: false,
      },
      total_donations: {
        title: 'Total Donado',
        type: 'number',
        filter: false,
      },
    },
  };

  // Función para ordenar el arreglo de acuerdo a la cantidad donada y le agrega el campo ranking
  sortAndRanking(data) {
    this.friends.sort((a, b) =>
      a.total_donations < b.total_donations ? 1 :
      a.total_donations > b.total_donations ? -1 :
      a.total_achievements < b.total_achievements ? 1 :
      a.total_achievements > b.total_achievements ? -1 :
      0);
    data.forEach(element => {
      element.ranking = data.indexOf(element) + 1;
    });
  }

  // Carga los amigos, los ordena y los guarda en this.friends
  loadFriends() {
    this.loading = true;
    this.userId = this.authService.userId;
    this.friendsRankingService.getFriendsRanking(this.userId).subscribe(
      data => {
        if (data) {
          if (data.friends_ranking) {
            this.friends = data.friends_ranking;
            this.sortAndRanking(this.friends);
            this.source.load(this.friends);
          }
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
