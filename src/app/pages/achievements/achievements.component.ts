import { Component } from '@angular/core';
import { AchievementsModel } from './achievements.model';

@Component({
  selector: 'ngx-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent {
  userId: Number;
  achievements = new AchievementsModel();

  constructor() {
    this.achievements = this.data;
  }

  // Dummy data
  data = {
    achieved: [
      {
        date: '2021-01-27',
        achievement: 'Total donaciones bronce',
        description: 'Dona al menos 100 dolares',
      },
      {
        date: '2021-01-27',
        achievement: 'Donacion estrella bronce',
        description: 'Realiza una donacion de al menos 5 dolares',
      },
      {
        date: '2021-01-27',
        achievement: 'Donacion estrella plata',
        description: 'Realiza una donacion de al menos 20 dolares',
      },
      {
        date: '2021-01-27',
        achievement: 'Donacion estrella oro',
        description: 'Realiza una donacion de al menos 50 dolares',
      },
      {
        date: '2021-01-27',
        achievement: 'Donacion estrella platino',
        description: 'Realiza una donacion de al menos 100 dolares',
      },
      {
        date: '2021-01-27',
        achievement: 'Donacion estrella diamante',
        description: 'Realiza una donacion de al menos 500 dolares',
      },
    ],
    not_achieved: [
      {
        achievement: 'Numero donaciones bronce',
        description: 'Llega a 5 donaciones',
      },
      {
        achievement: 'Numero donaciones plata',
        description: 'Llega a 10 donaciones',
      },
      {
        achievement: 'Numero donaciones oro',
        description: 'Llega a 20 donaciones',
      },
      {
        achievement: 'Numero donaciones platino',
        description: 'Llega a 50 donaciones',
      },
      {
        achievement: 'Numero donaciones diamante',
        description: 'Llega a 100 donaciones',
      },
      {
        achievement: 'Total donaciones plata',
        description: 'Dona al menos 500 dolares',
      },
      {
        achievement: 'Total donaciones oro',
        description: 'Dona al menos 1500 dolares',
      },
      {
        achievement: 'Total donaciones platino',
        description: 'Dona al menos 3000 dolares',
      },
      {
        achievement: 'Total donaciones diamante',
        description: 'Dona al menos 5000 dolares',
      },
      {
        achievement: 'Donante',
        description: 'Realiza una donacion',
      },
      {
        achievement: 'Donante recurrente',
        description: 'Realiza una donacion de al menos 1000 dolares',
      },
    ],
  };
}
