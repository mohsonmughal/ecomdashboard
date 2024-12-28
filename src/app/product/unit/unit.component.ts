import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnitService } from 'src/app/services/unit/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  addUnitForm!: FormGroup;
  upUnitform!: FormGroup;
  showUnit:any=[];
  keycode:any;
  constructor(private formBuilder: FormBuilder,private api:UnitService) { }
  
  ngOnInit(): void {
    this.initializeForm();
    this.getAllunit();
    this.updateUnit();

       // Reload Once
       if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
  }
  
  initializeForm() {
    this.addUnitForm = this.formBuilder.group({
      keycode: [''],
      id: [0],
      name: ['',[Validators.required, Validators.minLength(3)]],
      shortCode: ['',[Validators.required, Validators.minLength(2)]],
      astaxonamy: [true],
      parentkeycode: [''],
      description: ['',[Validators.required,Validators.maxLength(500)]],
      filePath: ['']
    });
  }
  
  
  Submit(){
    if(this.addUnitForm.valid){
      console.log("Form Submited" , this.addUnitForm.value)
      this.postUnit(this.addUnitForm.value);
    }else{
      alert("Incorrect data");
    }
  }
  
  updateUnit() {
    this.upUnitform = this.formBuilder.group({
      keycode: [''],
      id: [0],
      name: ['',[Validators.required, Validators.minLength(3)]],
      shortCode: ['',[Validators.required, Validators.minLength(2)]],
      astaxonamy: [true],
      parentkeycode: [''],
      description: ['',[Validators.maxLength(500)]],
      filePath: ['']
    });
  }
  
  submitupForm(keycode:any,data:any) {
    console.log("Key" , keycode, "Data" ,data);
    this.api.upUnit(data).subscribe((res)=>{
      console.log("Cat Updated SuccessFully" , res)
    })

    }
  
  getAllunit(){
    this.api.getAllunit().subscribe((res)=>{
      this.showUnit = res;
      console.log("All Category" ,this.showUnit)
    })
  }
  
  postUnit(data:any){
    this.api.postUnit(data).subscribe((res)=>{
      console.log("Category Posted" , res)
      this.addUnitForm.reset();
      window.location.reload();
    })
  }
  
  upUnitfun(data:any){
    console.log("Fun Arslan",data);
    this.api.getbyID(data).subscribe(res=>{
      console.log(res);
      window.location.reload();
    })
    this.keycode = data;
  }
  
  
  edit(row:any){
    this.showUnit.patchValue({
      keycode: row.keycode,
      id: row.id,
      name: row.name,
      shortCode: row.shortCode,
      astaxonamy: row.astaxonamy,
      parentkeycode: row.parentkeycode,
      description: row.description,
      filePath: row.filePath
    });
  }
  
  
  
  delUnit(key:any){
    this.api.delUnit(key).subscribe((res)=>{
      console.log("Cat deleted" ,res)
      alert("Unit Posted");
      window.location.reload();

    })
    this.getAllunit();
  }
  
   
}
