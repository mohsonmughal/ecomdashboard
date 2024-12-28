import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { RoleService } from 'src/app/services/roles/role.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.css']
})
export class UsersListingComponent implements OnInit {

  constructor(private userApi:UsersService,private fb:FormBuilder,private roleApi:RoleService, private router:Router) { }
  upUserform!:FormGroup;
  showUser:any=[];
  showRoles:any=[];

  ngOnInit(): void {
    this.getAllUsers();
    this.initial();
    this.getAllRoles();

       // Reload Once
       if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
  }
//Getting All Users
getAllUsers(){
  this.userApi.getAllUsers().subscribe((res)=>{
    this.showUser = res;
    console.log("Users " ,res)
  })
}

delUser(key:any)
{
  this.userApi.delUser(key).subscribe((res)=>{
    console.log("User Deleted" , res)
    alert("User Deleted");
    window.location.reload();
  })
}
initial(): void {
  this.upUserform = this.fb.group({
    keycode: [''],
    firstName: [''],
    lastName: [''],
    pin: [''],
    isActive: [true],
    terminalRegister: [true],
    allowLogin: [true],
    username: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    rolekeycode: [''],
    colorCode: [''],
    allLocations: [true],
    userLocations: this.fb.array([
      this.fb.group({
        locationkeycode: ['2404271812110000008']
      })
    ]),
    dateOfBirth: ['2024-05-05T13:25:44.484Z'],
    gender: ['Male'],
    maritalStatus: ['Married'],
    bloodGroup: ['string'],
    contactNumber: ['string'],
    facebookLink: ['string'],
    twitterLink: ['string'],
    socialMedia1: ['string'],
    socialMedia2: ['string'],
    customField1: ['string'],
    customField2: ['string'],
    customField3: ['string'],
    customField4: ['string'],
    guardianName: ['string'],
    idProofName: ['string'],
    idProofNumber: ['string'],
    permanentAddress: ['string'],
    currentAddress: ['string'],
    accountHolderName: ['string'],
    accountNumber: ['string'],
    bankName: ['string'],
    bankIdentifierCode: ['string'],
    branch: ['string'],
    taxPayerID: ['string'],
    departmentkeycode: ['string'],
    designationkeycode: ['string'],
    assignedTo: ['string'],
    createdBy: ['string'],
    createdOn: ['2024-05-05T13:25:44.484Z'],
    updatedBy: ['string'],
    updatedOn: ['2024-05-05T13:25:44.484Z']
  });
}
edit(row:any){
  this.upUserform.patchValue({
    keycode: row.keycode,
    id: row.id,
    firstName: row.firstName,
    lastName: row.lastName,
    username: row.username,
    email: row.email,
    password:row.password,
    confirmPassword:row.confirmPassword,
    pin: row.pin,
    rolekeycode: row.rolekeycode
  });
}
getAllRoles(){
  this.roleApi.getAllRoles().subscribe((res:any)=>{
    this.showRoles = res;
    console.log("Roles" , this.showRoles)

  })
}
onVariationSelect(event: any) {
  //this.slectedViesList.push(view);

   console.log('Selected Variation', event.target.value);

}

upUser(data:any){
  this.userApi.upUser(data).subscribe((res)=>{
    console.log("User Updated" , res)
  })
}

naivgateToAddUser(){
  this.router.navigate(['/adduser']);
}



}
