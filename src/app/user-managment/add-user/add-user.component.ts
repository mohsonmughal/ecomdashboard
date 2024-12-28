import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RoleService } from 'src/app/services/roles/role.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private roleApi:RoleService,private userApi:UsersService, private fb:FormBuilder){}
addUserform!: FormGroup;
showRoles:any=[];
isChecked: boolean = true;
ngOnInit(): void {
  
  this.getAllRoles();
  this.getAllUsers();
  this.initial();

     // Reload Once
     if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('reloaded');
    }
}
//Getting Roles
getAllRoles(){
  this.roleApi.getAllRoles().subscribe((res:any)=>{
    this.showRoles = res;
    console.log("Roles" , this.showRoles)

  })
}

//Getting All Users
getAllUsers(){
  this.userApi.getAllUsers().subscribe((res)=>{
    console.log("Users " ,res)
  })
}
initial(): void {
  this.addUserform = this.fb.group({
    keycode: ['string'],
    firstName: ['string'],
    lastName: ['string'],
    pin: ['string'],
    isActive: [true],
    terminalRegister: [true],
    allowLogin: [true],
    username: ['string'],
    email: ['string'],
    password: [''],
    confirmPassword: [''],
    rolekeycode: ['string'],
    colorCode: ['string'],
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




postUser(data:any){
  this.userApi.postUser(data).subscribe((res)=>{
    console.log("User Posted" , res)
    alert("User Added");
    window.location.reload();
  })
}





submitForm() {
throw new Error('Method not implemented.');
}
onVariationSelect(event: any) {
  //this.slectedViesList.push(view);

   console.log('Selected Variation', event.target.value);

}

  checkToggler(evevt:any){
    console.log('check value',evevt.target.value)
    const val=evevt.target.value
    if(val === 'true')
{
  this.isChecked = true;
  console.log(this.isChecked);

}
else{
  this.isChecked = false;
  console.log(this.isChecked);
} 
  }
 
  
}
