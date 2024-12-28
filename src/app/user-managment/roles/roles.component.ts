import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/roles/role.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  showRole:any = [];
  roleForm!:FormGroup;
  upRoleForm!:FormGroup;
  constructor(private api:RoleService,private formBuilder:FormBuilder) { }


  PosRol() {
    this.roleForm = this.formBuilder.group({
      keycode: ['' ],
      id: ['0' ],
      name: ['', Validators.required],
      isActive: [true]
    });
  }
  UpRol() {
    this.upRoleForm = this.formBuilder.group({
      keycode: ['' ],
      id: ['0' ],
      name: ['', Validators.required],
      isActive: [true]
    });
  }
  ngOnInit(): void {
    this.getAllRoles();
    this.PosRol();
    this.UpRol();

       // Reload Once
       if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
  }
  getAllRoles(){
    this.api.getAllRoles().subscribe((res)=>{
      this.showRole = res;
      console.log("Roles From Api" , this.showRole)
    })
  }
  PostRole(data:any){
    this.api.postRole(data).subscribe((res)=>{
      console.log("Role Posted" , res)
    })
    console.log("Form Sub", data)
    alert("Role Added!")
    window.location.reload();
  }

  delRole(keycode:any){
    this.api.delRole(keycode).subscribe((res)=>{
      console.log( "Deleted" , res);
      window.location.reload();
    })
  }

  updateRole(keycode:any ,data:any){
    this.api.upRole(data).subscribe((res)=>{
      console.log("Role Updated" , res)
    })
    console.log("key" , keycode , "data " , data)
  }


  getById(keycode:any){
    this.api.getbyID(keycode).subscribe((res)=>{
      console.log("Get By ID" , res)
    })
  }

  edit(row:any){
    this.upRoleForm.patchValue({
      name: row.name,
    });
  }
}
