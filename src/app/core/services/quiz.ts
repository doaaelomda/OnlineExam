import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.';

@Injectable({
  providedIn: 'root',
})
export class Quiz {
    constructor(private http: HttpClient) {}

  getExams() {
    return this.http.get(`${environment.apiUrl}/exams`);
  }

  getExamById(id:string){
    return this.http.get(`${environment.apiUrl}/exams/${id}`);
  }
}
