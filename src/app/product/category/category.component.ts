import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

addCategoryForm!: FormGroup;
upCatform!: FormGroup;
showCat:any=[];
keycode:any;
constructor(private formBuilder: FormBuilder,private api:CategoryService) { }

ngOnInit(): void {
  this.initializeForm();
  this.getAllcate();
  this.updateCat();

     // Reload Once
     if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('reloaded');
    }
}

initializeForm() {
  this.addCategoryForm = this.formBuilder.group({
    keycode: [''],
    id: [0],
    name: [''],
    shortCode: [''],
    astaxonamy: [true],
    parentkeycode: [''],
    description: [''],
    filePath: ['']
  });
}


Submit(){
  if(this.addCategoryForm.valid){
    console.log("Form Submited" , this.addCategoryForm.value)
  }
}

updateCat() {
  this.upCatform = this.formBuilder.group({
    keycode: [''],
    id: [0],
    name: [''],
    shortCode: [''],
    astaxonamy: [true],
    parentkeycode: [''],
    description: [''],
    filePath: ['']
  });
}

submitupForm(keycode:any,data:any) {
  console.log("Key" , keycode, "Data" ,data);
  this.api.upCat(data).subscribe((res)=>{
    console.log("Cat Updated SuccessFully" , res)
  })
  this.getAllcate();
  }

getAllcate(){
  this.api.getAllcate().subscribe((res)=>{
    this.showCat = res;
    console.log("All Category" ,this.showCat)
  })
}

postcate(data:any){
  this.api.postCate(data).subscribe((res)=>{
    console.log("Category Posted" , res)
  })
}

upCatfun(data:any){
  console.log("Fun Arslan",data);
  this.api.getbyID(data).subscribe(res=>{
    console.log(res);
  })
  this.keycode = data;
}


edit(row:any){
  this.upCatform.patchValue({
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



delCat(key:any){
  this.api.delCat(key).subscribe((res)=>{
    console.log("Cat deleted" ,res)
  })
  this.getAllcate();
}




}
