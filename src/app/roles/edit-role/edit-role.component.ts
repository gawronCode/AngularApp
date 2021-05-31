import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IroleDTO } from '../roles.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  constructor(private  rolesService: RolesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  model: IroleDTO;
  id: number;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.rolesService.getById(params.id).subscribe(data => {
        this.id = params.id;
        this.model = {name:data.name,
                      description:data.description,
                      id:data.id}

      });
      
    });

  }

  saveChanges(roleDTO: IroleDTO){
    this.rolesService.update(roleDTO, this.id).subscribe(() => {
      this.router.navigate(['/roles']);
    })
  }


}
