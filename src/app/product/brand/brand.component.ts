import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { UnitService } from 'src/app/services/unit/unit.service';
import { BrandService } from 'src/app/services/brand/brand.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  addBrandForm!: FormGroup;
  upBrandform!: FormGroup;
  showUnit:any=[];
  keycode:any;
  constructor(private formBuilder: FormBuilder,private api:BrandService) { }
  
  ngOnInit(): void {
    this.initializeForm();
    this.getAllbrands();
    this.initForm();
       // Reload Once
       if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
  }
  
  initializeForm() {
    this.addBrandForm = this.formBuilder.group({
      keycode: [''],
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',[Validators.required, Validators.maxLength(500)]],
      isActive: [true],
      createdBy: [''],
      createdOn: [''],
      updatedBy: [''],
      updatedOn: ['']
    });
  }
  
  
  Submit(){
    if(this.addBrandForm.valid){
      console.log("Form Submited" , this.addBrandForm.value)
    }
  }
  
  initForm(): void {
    this.upBrandform = new FormGroup({
      keycode: new FormControl(''),
      id: new FormControl(0),
      name: new FormControl(''),
      description: new FormControl(''),
      isActive: new FormControl(true),
      createdBy: new FormControl(''),
      createdOn: new FormControl(''),
      updatedBy: new FormControl(''),
      updatedOn: new FormControl('')
    });
  }

  
  submitupForm(keycode:any,data:any) {
    console.log("Key" , keycode, "Data" ,data);
    this.api.upBrand(data).subscribe((res)=>{
      console.log("Cat Updated SuccessFully" , res)
    })

    }
  
  getAllbrands(){
    this.api.getAllBrands().subscribe((res)=>{
      this.showUnit = res;
      console.log("All Brands" ,this.showUnit)
    })
  }
  
  postBrand(data:any){
    if (this.addBrandForm.valid) {
      console.log('Form Submitted', data);
      this.api.postBrand(data).subscribe((res)=>{
        console.log("Category Posted" , res)
        alert("Brand Posted");
        this.addBrandForm.reset();
        window.location.reload();
      })
    } else {
      alert('Form is invalid');
      this.addBrandForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }

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
  
  
  
  delBrand(key:any){
    this.api.delBrand(key).subscribe((res)=>{
      console.log("Cat Deleted" ,res)
      alert("Brand Deleted");
      window.location.reload();

    })
    
  }
  
   
}
