import { Injectable } from '@angular/core';
import { userDTO } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAll(): userDTO[]{
    return [{Id: 1, Name: "Jan", SecondName: "Kowalski", 
            Age: 22, Email: "jan.kowalski@gmail.com", Phone: "123456789", 
            RoleId:1, RoleName:"Admin", RoleAssignDate: new Date(20-10-2021)}]
  }

}
