import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './tables/users-table/users-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import { MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { RolesTableComponent } from './tables/roles-table/roles-table.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateRoleComponent } from './roles/create-role/create-role.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { UserFormComponent } from './users/user-form/user-form.component'

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
    EditRoleComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
