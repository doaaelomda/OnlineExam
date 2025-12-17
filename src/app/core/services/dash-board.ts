import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.';

@Injectable({
  providedIn: 'root',
})
export class DashBoard {
  constructor(private http: HttpClient) {}

  getsubjects() {
    return this.http.get(`${environment.apiUrl}/subjects`);
  }
}
