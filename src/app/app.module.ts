import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './TAI_Users/users-table/users-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { RolesTableComponent } from './TAI_Roles/roles-table/roles-table.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateRoleComponent } from './roles/create-role/create-role.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    MenuComponent,
    UsersComponent,
    RolesComponent,
    RolesTableComponent,
    CreateUserComponent,
    CreateRoleComponent,
    EditUserComponent,
    EditRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
