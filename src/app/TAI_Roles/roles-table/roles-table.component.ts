import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.css']
})
export class RolesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  roles;

}
