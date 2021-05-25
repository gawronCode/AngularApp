import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userDTO } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private GetAllURL = environment.apiURL + "/Users/GetAll"

  getAll(): Observable<userDTO[]>{
    return this.httpClient.get<userDTO[]>(this.GetAllURL);
  }

}
