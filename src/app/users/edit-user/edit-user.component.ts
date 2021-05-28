import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userCreationDto, userDTO } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private  usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  user;
  model;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.usersService.getById(params.id).subscribe(user => {
        this.user=user});
      // alert(params.id)
    })

    console.log(this.user);
  }

  saveChanges(userCreationDto: userCreationDto){
    console.log(userCreationDto);
    this.router.navigate(['/users']);
  }

}
