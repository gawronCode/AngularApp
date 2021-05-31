import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor() { }

  
  @Output()
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }
  
  delete(id:number){
    this.onDelete.emit(id);
  }
  
  @Input()
  users;

}
