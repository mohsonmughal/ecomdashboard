import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { VariationService } from 'src/app/services/proVariation/variation.service';
@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.css']
})
export class VariationComponent implements OnInit {
  addVariationForm!: FormGroup;
  upVariationform!: FormGroup;
  showVariation:any=[];
  keycode:any;
  constructor(private formBuilder: FormBuilder,private api:VariationService) { }

  showAry:any=[]

  ngOnInit(): void {
    this.initializeForm();
    this.getAllVariation();
    this.updateVariation();

       // Reload Once
       if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
  }

  onEnter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.trim(); // Trim whitespace

    if (value) {
      this.showAry.push(value); // Push the value to the array
      console.log(this.showAry); // Log the array for verification
      inputElement.value = ''; // Clear the input field
      // You can perform any other actions here with the updated array
    }
   
  }
  
  
  
  
  delItem(item: any): void {
    // const index = this.showAry.indexOf(item);
    // if (index !== -1) {
    //   this.showAry.splice(index, 1); // Remove the item from the array
    //   console.log("Del", this.showAry);
    // }
  }

  

  initializeForm() {
   
      this.addVariationForm = this.formBuilder.group({
        variationName: [''],
        description: [''],
        variationOptionsList: this.formBuilder.array([this.formBuilder.control('')])
      });
  
  }

  
  get variationOptionsList() {
    return this.addVariationForm.get('variationOptionsList') as FormArray;
  }

  addVariationOption() {
    this.variationOptionsList.push(this.formBuilder.control(''));
  }

  removeVariationOption(index: number) {
    this.variationOptionsList.removeAt(index);
  }

  onSubmit() {
    console.log(this.addVariationForm.value);
  }
  
  
  Submit(){
    if(this.addVariationForm.valid){
      console.log("Form Submited" , this.addVariationForm.value)
    }
  }
  
  updateVariation() {
    this.upVariationform = this.formBuilder.group({
      variationName: [''],
      description: [''],
      variationOptionsList: this.formBuilder.array([this.formBuilder.control('')])
    });
  }
  
  submitupForm(keycode:any,data:any) {
    console.log("Key" , keycode, "Data" ,data);
    this.api.upVariation(data).subscribe((res)=>{
      console.log("Cat Updated SuccessFully" , res)
    })

    }
  
  getAllVariation(){
    this.api.getAllvariation().subscribe((res)=>{
      this.showVariation = res;
      console.log("All Variations" ,this.showVariation)
    })
  }
  
  postVariation(data:any){
    this.api.postVariation(data).subscribe((res)=>{
      console.log("Category Posted" , res)
      alert("Variation Added");
      this.addVariationForm.reset();
      window.location.reload();
    })
  }
  
  upUnitfun(data:any){
    console.log("Fun Arslan",data);
    this.api.getbyID(data).subscribe((res:any)=>{
      console.log(res);
      const responce =res.data;
      this.edit(responce);

     // window.location.reload();
    })
    this.keycode = data;
  }
  
  
  edit(row:any){
    this.upVariationform.patchValue({
      keycode: row.keycode,
      id: row.id,
      variationName: row.variationName,
      description: row.description,
      variationOptionsList: row.variationOptionsList,
      
    });
  }
  
  
  
  delVariation(key:any){
    this.api.delVariation(key).subscribe((res)=>{
      console.log("Variation Deleted" ,res)
      alert("Variation Deleted");
      window.location.reload();

    })
 
  }
  
   

}
