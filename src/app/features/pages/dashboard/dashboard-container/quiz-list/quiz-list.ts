import { Component, OnInit } from '@angular/core';
import { DashBoard } from '../../../../../core/services/dash-board';

@Component({
  selector: 'app-quiz-list',
  imports: [],
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
