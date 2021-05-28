import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { userCreationDto } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    
  }

  saveChanges(userCreationDto: userCreationDto){
    this.usersService.add(userCreationDto).subscribe(()=>{
      this.router.navigate(['/users']);
    });
  }

  

}
