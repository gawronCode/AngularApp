import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IroleDTO } from 'src/app/roles/roles.model';
import { RolesService } from 'src/app/roles/roles.service';
import { IuserCreationDTO } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private  usersService: UsersService, private rolesService: RolesService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  model: IuserCreationDTO;
  roles: IroleDTO[];
  roleId: number;
  id: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.usersService.getById(params.id).subscribe(data => {
        this.id = params.id;
        this.model = {name:data.name,
                      secondName:data.secondName,
                      age:data.age,
                      email:data.email,
                      phone:data.phone,
                      roleId:data.roleId}
        this.roleId=data.roleId;
      });
      this.rolesService.getAll().subscribe(data=>this.roles=data);
      
    });

    

  }

  saveChanges(o: {model: IuserCreationDTO, roleId:number}){
    this.usersService.update(o.model, this.id).subscribe(() => {
      this.usersService.updateRole(o.roleId, this.id).subscribe(()=>{
        this.router.navigate(['/users']);
      })
    })
  }

}
