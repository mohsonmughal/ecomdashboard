import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private api:CategoryService) { }
  
  ngOnInit(): void {
    this.initializeForm();
    this.getAllcate();
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
      name: ['',[Validators.required, Validators.minLength(3)]],
      shortCode: ['', [Validators.required, Validators.minLength(2)]],
      astaxonamy: [true],
      parentkeycode: [''],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      filePath: ['']
    });
  }
  Submit(){
    if(this.addCategoryForm.valid){
      console.log("Form Submited" , this.addCategoryForm.value)
     
    }
  }
  
  getAllcate(){
    this.api.getAllcate().subscribe((res)=>{
      console.log("All Category" , res)
    })
  }
  
  
  postcate(data:any){
    debugger
    if (this.addCategoryForm.valid) {
    this.api.postCate(data).subscribe((res)=>{
      console.log("Category Posted" , res)
      alert("Category Posted");
      this.addCategoryForm.reset();
      window.location.reload();
    })
  }else {
    alert('Form is invalid');
    this.addCategoryForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
  }
  }




}
