import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RolesComponent,
    UsersListingComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    RolesComponent
  ]
})
export class UserManagmentModule { }
