import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      
      // this.users = []
      
      this.roles = [{
        Id: 1,
        Name: "Administrator",
        Description: "Konto z pełnymi uprawnieniami dostępu"
      },{
        Id: 2,
        Name: "Klient",
        Description: "Konto klienta"
      }];
    }, 1000);
  }

  roles;

}
