import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AchievementsModel } from './achievements.model';
import { AchievementsService } from './achievements.service';
import { medals } from '../../../assets/data/medals';

@Component({
  selector: 'ngx-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit{
  userId: Number;
  achievements = new AchievementsModel();
  medals: any;
  @ViewChild('achieved', { static: true }) achieved;
  @ViewChild('toGet', { static: true }) toGet;

  constructor(
    private achievementsService: AchievementsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(){
    this.loadAchievements();
    this.medals = medals;
  }

  loadAchievements(){
    this.userId = this.authService.userId
    this.achievementsService.getAchievements(this.userId).subscribe(data=>{
      if (data){
        this.achievements = data;
      }
    })
  }
}
