import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { UsersService } from '../../core/services/users-service';

@Component({
  selector: 'app-search-users',
  imports: [],
  templateUrl: './search-users.html',
  styleUrl: './search-users.scss',
})
export class SearchUsers implements OnInit {
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.initialForm();
    this.searchForm
      .get('searchControl')!
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term) => this.usersService.searchUsers(term))
      )
      .subscribe((results) => {
        this.users = results;
      });
  }

  searchForm!: FormGroup;
  users: any;

  initialForm() {
    this.searchForm = new FormGroup({
      searchControl: new FormControl(''),
    });
  }
}
