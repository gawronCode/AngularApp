import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IroleDTO } from './roles.model';
import {RolesService} from './roles.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: IroleDTO[];

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.rolesService.getAll().subscribe(roles => this.roles=roles);
  }

  delete(id:number){
    this.rolesService.delete(id).subscribe(()=>{
      this.ngOnInit();
    });
  }


}
