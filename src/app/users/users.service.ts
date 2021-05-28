import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userCreationDto, userDTO } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private GetAllURL = environment.apiURL + "/Users/GetAll";
  private GetByIdURL = environment.apiURL + "/Users/GetById/";
  private AddURL = environment.apiURL + "/Users/Add";
  private UpdateURL = environment.apiURL + "/Users/Update/";
  private DeleteURL = environment.apiURL + "/Users/Delete/";


  getAll(): Observable<userDTO[]>{
    return this.httpClient.get<userDTO[]>(this.GetAllURL);
  }

  getById(id:number): Observable<userDTO>{
    return this.httpClient.get<userDTO>(this.GetByIdURL+id);
  }

  add(user: userCreationDto){
    return this.httpClient.post(this.AddURL, user);
  }

  update(user: userCreationDto, id:number){
    return this.httpClient.put(this.UpdateURL+id, user);
  }

  delete(id:number){
    return this.httpClient.delete(this.DeleteURL+id);
  }

}
