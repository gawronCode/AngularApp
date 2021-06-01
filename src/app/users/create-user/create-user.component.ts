import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IroleDTO } from 'src/app/roles/roles.model';
import { RolesService } from 'src/app/roles/roles.service';
import { IuserCreationDTO } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private usersService: UsersService, private rolesService: RolesService) { }

  roles: IroleDTO[];

  ngOnInit(): void {
    this.rolesService.getAll().subscribe(data=>this.roles=data);
  }

  saveChanges(o: {model: IuserCreationDTO, roleId:number}){
    this.usersService.add(o.model).subscribe(()=>{
      this.router.navigate(['/users']);
    });
  }

  

}
