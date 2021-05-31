import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.css']
})
export class RolesTableComponent implements OnInit {

  constructor() { }

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  delete(id:number){
    this.onDelete.emit(id);
  }

  @Input()
  roles;

}
