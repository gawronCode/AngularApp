import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {IroleDTO} from './roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private GetAllURL = environment.apiURL + "/Roles/GetAll";
  private GetByIdURL = environment.apiURL + "/Roles/GetById/";
  private AddURL = environment.apiURL + "/Roles/Add";
  private UpdateURL = environment.apiURL + "/Roles/Update/";
  private DeleteURL = environment.apiURL + "/Roles/Delete/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IroleDTO[]>{
    return this.httpClient.get<IroleDTO[]>(this.GetAllURL);
  }

  getById(id:number): Observable<IroleDTO>{
    return this.httpClient.get<IroleDTO>(this.GetByIdURL+id);
  }

  add(role: IroleDTO){
    return this.httpClient.post(this.AddURL, role);
  }

  update(role: IroleDTO, id:number){
    return this.httpClient.put(this.UpdateURL+id, role);
  }

  delete(id:number){
    return this.httpClient.delete(this.DeleteURL+id);
  }

}
