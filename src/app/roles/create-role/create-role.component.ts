import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IroleDTO } from '../roles.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private router: Router, private rolesService: RolesService) { }

  ngOnInit(): void {
  }

  saveChanges(roleDTO: IroleDTO){
    this.rolesService.add(roleDTO).subscribe(()=>{
      this.router.navigate(['/roles']);
    });
  }

}
