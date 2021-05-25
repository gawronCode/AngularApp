import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './TAI_Users/users-table/users-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    MenuComponent,
    UsersComponent,
    RolesComponent
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
