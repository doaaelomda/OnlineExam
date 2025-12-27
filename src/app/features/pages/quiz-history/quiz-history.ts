import { Component, OnInit, inject } from '@angular/core';
import { AuthOnlineService } from '../../../core/services/auth-online-service';

@Component({
  selector: 'app-quiz-history',
  imports: [],
  templateUrl: './quiz-history.html',
  styleUrl: './quiz-history.scss',
})
export class QuizHistory implements OnInit {
  historyData:any
  constructor(private AuthOnlineService:AuthOnlineService){}
  ngOnInit(): void {
    this.getHistory()
  }

  getHistory(){
    debugger
    this.AuthOnlineService.getHistory().subscribe((res:any)=>{
      this.historyData=res
      
    })
  }

}
