import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { userDTO } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: userDTO[];

  constructor(private  usersService: UsersService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => this.users=users);
  }

  delete(id:number){
    this.usersService.delete(id).subscribe(()=>{
      this.ngOnInit();
    });
  }

}
