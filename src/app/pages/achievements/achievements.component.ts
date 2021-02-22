import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AchievementsModel } from './achievements.model';
import { AchievementsService } from './achievements.service';

@Component({
  selector: 'ngx-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit{
  userId: Number;
  achievements = new AchievementsModel();

  constructor(
    private achievementsService: AchievementsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(){
    this.loadAchievements();
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
