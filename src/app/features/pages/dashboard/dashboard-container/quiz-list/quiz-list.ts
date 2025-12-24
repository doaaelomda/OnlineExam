import { Component, OnInit } from '@angular/core';
import { DashBoard } from '../../../../../core/services/dash-board';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-quiz-list',
  imports: [ProgressSpinnerModule],
  templateUrl: './quiz-list.html',
  styleUrl: './quiz-list.scss',
})
export class QuizList implements OnInit {
  dashBoardData:any[]=[]
  constructor(private DashBoard:DashBoard){}
  ngOnInit(){
    
    this.DashBoard.getsubjects().subscribe((res:any)=>{
      this.dashBoardData=res?.subjects
    })
  }

}
