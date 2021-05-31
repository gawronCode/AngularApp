import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IuserCreationDTO, userDTO, IuserDTO, userCreationDTO } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private  usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  model: IuserCreationDTO;
  id: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.usersService.getById(params.id).subscribe(data => {
        this.id = params.id;
        this.model = {name:data.name,
                      secondName:data.secondName,
                      age:data.age,
                      email:data.email,
                      phone:data.phone}

      });
      
    });

  }

  saveChanges(userCreationDto: IuserCreationDTO){
    this.usersService.update(userCreationDto, this.id).subscribe(() => {
      this.router.navigate(['/users']);
    })
  }

}
