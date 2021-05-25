import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { userDTO } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private  usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => this.users=users);
  }

}
