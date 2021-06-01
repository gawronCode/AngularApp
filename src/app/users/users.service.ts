import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IuserCreationDTO, IuserDTO } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private GetAllURL = environment.apiURL + "/Users/GetAll";
  private GetByIdURL = environment.apiURL + "/Users/GetById/";
  private AddURL = environment.apiURL + "/Users/Add";
  private UpdateURL = environment.apiURL + "/Users/Update/";
  private UpdateRoleURL = environment.apiURL + "/Users/UpdateRole/";
  private DeleteURL = environment.apiURL + "/Users/Delete/";


  getAll(): Observable<IuserDTO[]>{
    return this.httpClient.get<IuserDTO[]>(this.GetAllURL);
  }

  getById(id:number): Observable<IuserDTO>{
    return this.httpClient.get<IuserDTO>(this.GetByIdURL+id);
  }

  add(user: IuserCreationDTO){
    return this.httpClient.post(this.AddURL, user);
  }

  update(user: IuserCreationDTO, id:number){
    return this.httpClient.put(this.UpdateURL+id, user);
  }

  updateRole(roleId:number, id:number){
    console.log(roleId+","+id)
    return this.httpClient.put(this.UpdateRoleURL+id, {"roleId": roleId});
  }

  delete(id:number){
    return this.httpClient.delete(this.DeleteURL+id);
  }

}
