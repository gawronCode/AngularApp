import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
  }
  
  title: string = 'TAI_Projekt';
  
  @Input()
  users;

}
