import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { UnitService } from 'src/app/services/unit/unit.service';
import { VariationService } from 'src/app/services/proVariation/variation.service';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand/brand.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
showCat:any =[];
showUnit:any =[];
showVar:any=[];
addProductform!: FormGroup;
constructor(private router:Router,private formBuilder: FormBuilder,private api:ProductService,private catApi:CategoryService,private unitApi:UnitService,private varApi:VariationService , private braApi:BrandService) {}

ngOnInit() {
  // this.getAll();
  this.getAllcat();
  this.getAllunit();
  this.getAllbrands()
  this.initializeForm();
  console.log(this.addProductform.value)
  this.getAllvariation();
    // Perform null check before accessing addProductform.value
    if (this.addProductform) {
      console.log("Arsl", this.addProductform.value);
    } else {
      // Handle the case where addProductform is null
      console.error('addProductform is null or undefined');
    }
    // To reload page only once
    if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('reloaded');
    }
  

}



initializeForm(): void {
  this.addProductform = this.formBuilder.group({
    keycode: [''], // Initialize with an empty string
    id: [0],
    productSKUs: this.formBuilder.array([
      this.formBuilder.group({
        productSKU: [''] // Initialize with an empty string
      })
    ]),
    productTaxes: this.formBuilder.array([
      // this.formBuilder.group({
      //   taxRatekeycode: []
      // })
    ]),
    // productLocations: this.formBuilder.array([
    //   this.formBuilder.group({
    //     locationkeycode: [null]
    //   })
    // ]),
    filePath: [''],
    isActive: [true],
    plu: [''],  // Initialize with an empty string
    productName: [''], // Initialize with an empty string
    categorykeycode: [''], // Initialize with an empty string
    subCategorykeycode: [''],
    brand: [''],
    casesize: [0],
    casecost: [0],
    caseallowance: [0],
    caseothercost: [0],
    netcasecost: [0],
    unitcase: [0],
    unitallowance: [0],
    othercase: [0],
    netcost: [0],
    retailprice: [0],
    margin: [0],
    netmargin: [0],
    saleperinvoice: [0],
    vendors: [''],
    taxnontax: [true],
    baseunit: [''],
    transactionunit: [''],
    businesslocations: [null],
    alertqty: [''],
    managestock: [true],
    closingStock: [0],
    weightitem: [true],
    wiceligible: [true],
    ingredient: [true],
    etbeligible: [true],
    activeitem: [true],
    showinmenu: [true],
    mergeItem: [true],
    inventory: [true],
    mustaskqty: [true],
    showinkiosk: [true],
    kitchenpartner: [true],
    onlineitem: [true],
    skusameasplu: [true],
    packageupc: [''],
    packageprice: [0],
    sku: [''],
    itemno: [0],
    rebategroup: [''],
    plugroup: [''],
    manufacturer: [''],
    mixmatchgroup: [''],
    type: [''],
    onhandqty: [0],
    packsize: [''],
    dealname: [''],
    loyaltydescription: [''],
    smartmenu: [''],
    loyaltypoint: [0],
    loyaltyamount: [0],
    itemingredient: [''],
    phototags: [null],
    inventorygroup: [''],
    tagalongitem: [''],
    productdescription: [''],
    productimage: [''],
    onspecial: [true],
    startdate: [''],
    enddate: [''],
    specialprice: [0],
    sendtoscale: [true],
    hotkey: [''],
    itemexpirein: [''],
    weightatscale: [true],
    barcodeType: [''],
    warranty: [''],
    isEnableIMEI: [true],
    isNotForSelling: [true],
    isDisableWooCommerce: [true],
    rack: [''],
    row: [''],
    position: [''],
    newYorkRack: [''],
    newYorkRow: [''],
    newYorkPosition: [''],
    glassGowRack: [''],
    glassGowRow: [''],
    glassGowPosition: [''],
    weight: [0],
    customField1: [''],
    customField2: [''],
    customField3: [''],
    customField4: [''],
    applicableTax: [''],
    sellingPriceTaxType: [''],
    productType: [],
    //variation
    productVairants: this.formBuilder.array([
      this.formBuilder.group({
        productName: [''], // Default value or validation can be added here
        vairantMultiples: this.formBuilder.array([
          this.formBuilder.group({
            variationkeycode: [''], // Default value or validation can be added here
            variationOptionkeycode: [''] // Default value or validation can be added here
          })
        ])
      })
    ]),
    exclusiveTax: [0],
    inclusiveTax: [0],
    xMargin: [0],
    defaultSellingPrice: [0],
    createdBy: [''],
    createdOn: [''],
    updatedBy: [''],
    updatedOn: [''],
    is_Stock_Transfer: [true]
  });
}

submitForm() {
  if (this.addProductform.valid) {
    const isActiveControl = this.addProductform.get('isActive');
    if (isActiveControl) {
      isActiveControl.setValue(true);
    }
    console.log('Form submitted:', this.addProductform.value);
    this.api.addPro(this.addProductform.value).subscribe((res)=>{
      console.log("Pro Added" ,res)
      alert("Product Added" );
    })
    // Reset the form after submission
    this.addProductform.reset();
  } else {
    // Mark all fields as touched to display validation errors
    this.addProductform.markAllAsTouched();
  }
}

getAll(){
this.api.getAllpro().subscribe((res)=>{
  console.log("Data From Apii Arslan", res)
})
  
}


// getAllcat(){
//   this.catApi.getAllcate().subscribe((res)=>{
//     this.showCat = res;
//     console.log("All Categories" , this.showCat.data.keycode)
//   })
// }

getAllcat(){
  this.catApi.getAllcate().subscribe((res)=>{
    this.showCat = res;
    
    console.log("All Categories" , this.showCat.data);
    console.log("All Categories" , this.showCat);
    this.showCat.data.forEach((item: { keycode: any; }) => {
      // console.log("Keycode:", item.keycode);
    });
    this.showCat.data.forEach((item: { name: any; }) => {
      // console.log("name:", item.name);
    });
  })
}

getAllunit(){
  this.unitApi.getAllunit().subscribe((res)=>{
    this.showUnit = res;
    console.log("Units" , this.showUnit)
    this.showUnit.data.forEach((item1: { keycode: any; }) => {
      // console.log("Keycode:", item1.keycode);
    });
    this.showUnit.data.forEach((item1: { name: any; }) => {
      // console.log("name:", item1.name);
    });
  })
}
showBrand :any = [];
getAllbrands(){
  this.braApi.getAllBrands().subscribe((res)=>{
    this.showBrand = res;
    console.log("Brands" , this.showBrand)
    this.showUnit.data.forEach((item1: { keycode: any; }) => {
      // console.log("Keycode:", item1.keycode);
    });
    this.showUnit.data.forEach((item1: { name: any; }) => {
      // console.log("name:", item1.name);
    });
  })
}
slectedViesList: any[] = [];
onVariationSelect(event: any) {
  //this.slectedViesList.push(view);

   console.log('Selected Variation', event.target.value);

}
addCate(){
this.router.navigate(['addCategory'])
}

selectedOption: number | null = null;

onSelect(event: Event) {
  const target = event.target as HTMLSelectElement;
  const selectedValue = parseInt(target.value); // Parse value as integer
  this.selectedOption = selectedValue === 0 ? 0 : 1; // Set selectedOption to 0 if selectedValue is 0, otherwise set it to 1
}


//Getting Variations
getAllvariation(){
  this.varApi.getAllvariation().subscribe((res)=>{
    this.showVar = res;
    console.log("All Variations " , this.showVar)
  })
}

sim: any[] = [];
productVairants:any=[];
multiplesArray:any=[];
keycodes:any=[];

lengths:number=1;
lengthsum:number=0;
// Inside your component class
showVari: { data: { variationName: string }[] } = { data: [] }; // Specify the type directly

onCheckboxChange(event: Event, data: any) {
  const checkbox = event.target as HTMLInputElement;
  const variationName = checkbox.parentElement?.querySelector('h4')?.textContent || '';

  if (checkbox.checked) {
    // If checkbox is checked, push the data to the array
    this.sim.push(data);
    console.log('row', this.sim);
    this.keycodes.push(data.keycode);
    console.log('keycodes', this.keycodes);
    const len = data.variationOptions.length;
    this.lengths *= len;
    this.lengthsum = this.sim.length;
    console.log('Length', this.lengths);
    console.log('sum', this.lengthsum);
  
  } else {
    // If checkbox is unchecked, find the index of the data in the array and remove it
    const index = this.sim.findIndex(item => item.keycode === data.keycode);
    if (index !== -1) {
      this.sim.splice(index, 1);
      console.log('row', this.sim);
      this.keycodes.splice(index, 1);
      console.log('keycodes', this.keycodes);
           // Adjust lengths and lengthsum
           const len = data.variationOptions.length;
           this.lengths /= len;
           this.lengthsum = this.sim.length;
           console.log('Length', this.lengths);
           console.log('sum', this.lengthsum);
    }
  }

  console.log("Checkbox checked: ", variationName, checkbox.checked);

  // Your remaining code...

  console.log(" Sim Array" ,this.sim )
}

disVar:boolean= false;
disRow = true;
saveFun()
{
  this.disVar = true;
  this.disRow = false;
  console.log(this.sim);
  console.log(this.keycodes);

this.productVairants = this.formBuilder.array([]);
this.addProductform.setControl('productVairants', this.productVairants);

for (let index = 0; index < this.lengths; index++) {
  let newrow: FormGroup = this.AddRows(); // Initializes a new row
  
  let multiplesArray = newrow.get('vairantMultiples') as FormArray;

  for (let innerIndex = 0; innerIndex < this.lengthsum; innerIndex++) {
      let innerNewRow: FormGroup = this.addoptoions();
      innerNewRow.patchValue({
        variationkeycode: this.keycodes[innerIndex],
          variationOptionkeycode: ""
      });

      multiplesArray.push(innerNewRow);
  }
  
  this.productVairants.push(newrow);
}

}
addoptoions():FormGroup{
  return  this.formBuilder.group({
    variationkeycode: [''],
    
    variationOptionkeycode: ['']
    
  })
}



getControls() {
  return (this.addProductform.get('productVairants') as FormArray).controls;
}

AddRows(): FormGroup {
  return this.formBuilder.group({
    xMargin: [0],
    productName: [''],
  caseSize: [0],
  caseCost: [0],
  caseAllowance: [0],
  caseOtherCost: [0],
  netCaseCost: [0],
  unitCase: [0],
  unitAllowance: [0],
  otherCase: [0],
  netCost: [0],
  retailPrice: [0],
  margin: [0],
  netMargin: [0],
  salePerInvoice: [0],
  alertQty: [2], // Assuming a non-empty string is required
  manageStock: [true], // Default set to true
  closingStock: [0],
  inventory: [true], // Default set to true
  mustAskQty: [true] ,
    vairantMultiples: this.formBuilder.array([])  
  });
}

addRow() {
  console.log('length',this.lengths);
  const arraylength=this.getControls().length;
  console.log('length',arraylength);
  if(this.lengths <= arraylength){
   
   alert(
     'Already have maxmimum Rows!!!',
   );
 return
  }
 
   let newrow: FormGroup = this.AddRows();
 
   // Ensure that productVairants is a form array on the root form
   if (!this.addProductform.get('productVairants')) {
     this.productVairants = this.formBuilder.array([]);
     this.addProductform.setControl('productVairants', this.productVairants);
   }
 
   // Ensure that vairantMultiples is a form array on the new row
   if (!newrow.get('vairantMultiples')) {
     newrow.addControl('vairantMultiples', this.formBuilder.array([]));
   }
 
   // Retrieve vairantMultiples FormArray
   let multiplesArray = newrow.get('vairantMultiples') as FormArray;
 
   // Loop through all keycodes to create a corresponding inner row for each keycode
   for (let keyCodeIndex = 0; keyCodeIndex < this.keycodes.length; keyCodeIndex++) {
     let innerRow: FormGroup = this.addoptoions();
     innerRow.patchValue({
       variationkeycode: this.keycodes[keyCodeIndex],
       variationOptionkeycode: ""
     });
     multiplesArray.push(innerRow);
     alert("Row Added");
   }
 
   // Now push newrow into the productVairants array
   (this.addProductform.get('productVairants') as FormArray).push(newrow);
 
   
 }


  delRow(rowIndex: number) {
    this.productVairants.removeAt(rowIndex);
    console.log('deleted succefully',this.productVairants)
    alert("Row Deleted SuccessFully!!");
 
  }
 
  findVariationByKeycode(keycode: string, variationOptions: Array<{ keycode: string, id: number, variationValue: string }>): { keycode: string, id: number, variationValue: string } | undefined {
    return variationOptions.find(option => option.keycode === keycode);
  }


 // Ensure these helper methods are correct



 byuserslect(event: any, view: any, index: number): void {
  const row = this.productVairants.controls[index];
  
  // Use safe navigation operator (?.) to guard against null or undefined
  let mainProductname = this.addProductform?.get('productName')?.value as string;
  console.log('index', index);

  const keycode = event.target.value as string;
  const variationOptions = view.variationOptions as Array<{ keycode: string, id: number, variationValue: string }>;

  const selectedVariation = this.findVariationByKeycode(keycode, variationOptions);

  if (selectedVariation) {
      const variationValue = selectedVariation.variationValue;
      const variations = mainProductname?.split(" + ");

      // Check if this variation is already present
      if (variations && !variations.includes(variationValue)) {
          // Check if the index matches
          if (index === index) {
              variations.push(variationValue);
          }
           else {
              // If the index is different, just replace the variation
              for (let i = 0; i < variations.length; i++) {
                  if (variations[i] === variationValue) {
                      variations[i] = variationValue;
                      break;
                  }
              }
          }
      }

      mainProductname = variations?.join(" + ");

      row.get('productName')?.setValue(mainProductname);
  } else {
      alert(`No matching variation found for keycode: ${keycode}`);
  }
}

//For Media
selectedFiles: File[] = [];
imageUrls: string[] = [];
progress: number = 0;
message: string = '';

onFileChange(event: any): void {

  console.log("eve " ,event.target.files)
  this.selectedFiles = Array.from(event.target.files);

  this.previewImages();
}

previewImages(): void {
  this.imageUrls = [];
  this.selectedFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrls.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });
}

deleteImage(index: number): void {
  this.imageUrls.splice(index, 1);
  this.selectedFiles.splice(index, 1);
}




photo: string = '';
fileForImage: any;

photoArray: any[] = [
  { url: 'assets/photoGellery/83b001d629f121eea6797b62cdcb4c68.jpeg', id: 1 },
  { url: 'assets/photoGellery/beautiful-nature-scenery-wallpaper-view_1123191-727.avif', id: 2 },
  { url: 'assets/photoGellery/download.jpeg', id: 3 },
  { url: 'assets/photoGellery/istockphoto-487180291-612x612.jpg', id: 4 },
  { url: 'assets/photoGellery/painting-mountain-lake-with-mountain-background_188544-9126.avif', id: 5 },
  { url: 'assets/photoGellery/pexels-pixabay-60597.jpg', id: 6 },
  { url: 'assets/photoGellery/elephant-wallpaper-elephant-hd-elephant-images-download-ai-generated-photo.jpg', id: 7 },
  { url: 'assets/photoGellery/images (1).jpeg', id: 8 },
  { url: 'assets/photoGellery/images (2).jpeg', id: 9 },
  { url: 'assets/photoGellery/images (3).jpeg', id: 10 },
  { url: 'assets/photoGellery/images (4).jpeg', id: 11 },
  { url: 'assets/photoGellery/images (5).jpeg', id: 12 },
  { url: 'assets/photoGellery/images.jpeg', id: 13 },
  { url: 'assets/photoGellery/istockphoto-487180291-612x612.jpg', id: 14 },
  { url: 'assets/photoGellery/pexels-pixabay-60597.jpg', id: 15 },
  { url: 'assets/photoGellery/painting-mountain-lake-with-mountain-background_188544-9126.avif', id: 16 },
  { url: 'assets/photoGellery/wallpaperflare.com_wallpaper (4).jpg', id: 17 },
  { url: 'assets/photoGellery/wallpaperflare.com_wallpaper (5).jpg', id: 18 },
  { url: 'assets/photoGellery/wallpaperflare.com_wallpaper (6).jpg', id: 19 },
];

selectPhoto(photo: any) {
  console.log('Selected Photo:', photo);
  alert("Image Selected");
  this.photo = photo.url;
  const productImageControl = this.addProductform.get('productimage');
    if (productImageControl) {
      productImageControl.setValue(photo.url);
    }
}

public uploadFile(files: any) {
  if (files.length === 0) {
    return;
  }
  this.fileForImage = files;
  console.log(files);
  console.log(this.fileForImage);
}










}


