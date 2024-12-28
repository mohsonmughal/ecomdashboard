import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { RouterLink } from '@angular/router'; 
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showPro:any=[];
  upProform!:FormGroup;
  constructor( private api:ProductService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
    this.upProform = new FormGroup({
      keycode: new FormControl(''),
      id: new FormControl(0),
      productSKUs: this.formBuilder.array([
        this.formBuilder.group({
          productSKU: new FormControl('')
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
      filePath: new FormControl(''),
      isActive: new FormControl(true),
      plu: new FormControl(''),
      productName: new FormControl(''),
      categorykeycode: new FormControl(''),
      subCategorykeycode: new FormControl(''),
      brand: new FormControl(''),
      casesize: new FormControl(0),
      casecost: new FormControl(0),
      caseallowance: new FormControl(0),
      caseothercost: new FormControl(0),
      netcasecost: new FormControl(0),
      unitcase: new FormControl(0),
      unitallowance: new FormControl(0),
      othercase: new FormControl(0),
      netcost: new FormControl(0),
      retailprice: new FormControl(0),
      margin: new FormControl(0),
      netmargin: new FormControl(0),
      saleperinvoice: new FormControl(0),
      vendors: new FormControl(''),
      taxnontax: new FormControl(true),
      baseunit: new FormControl(''),
      transactionunit: new FormControl(''),
      businesslocations: new FormControl(null),
      alertqty: new FormControl(''),
      managestock: new FormControl(true),
      closingStock: new FormControl(0),
      weightitem: new FormControl(true),
      wiceligible: new FormControl(true),
      ingredient: new FormControl(true),
      etbeligible: new FormControl(true),
      activeitem: new FormControl(true),
      showinmenu: new FormControl(true),
      mergeItem: new FormControl(true),
      inventory: new FormControl(true),
      mustaskqty: new FormControl(true),
      showinkiosk: new FormControl(true),
      kitchenpartner: new FormControl(true),
      onlineitem: new FormControl(true),
      skusameasplu: new FormControl(true),
      packageupc: new FormControl(''),
      packageprice: new FormControl(0),
      sku: new FormControl(''),
      itemno: new FormControl(0),
      rebategroup: new FormControl(''),
      plugroup: new FormControl(''),
      manufacturer: new FormControl(''),
      mixmatchgroup: new FormControl(''),
      type: new FormControl(''),
      onhandqty: new FormControl(0),
      packsize: new FormControl(''),
      dealname: new FormControl(''),
      loyaltydescription: new FormControl(''),
      smartmenu: new FormControl(''),
      loyaltypoint: new FormControl(0),
      loyaltyamount: new FormControl(0),
      itemingredient: new FormControl(''),
      phototags: new FormControl(null),
      inventorygroup: new FormControl(''),
      tagalongitem: new FormControl(''),
      productdescription: new FormControl(''),
      productimage: new FormControl(''),
      onspecial: new FormControl(true),
      startdate: new FormControl(''),
      enddate: new FormControl(''),
      specialprice: new FormControl(0),
      sendtoscale: new FormControl(true),
      hotkey: new FormControl(''),
      itemexpirein: new FormControl(''),
      weightatscale: new FormControl(true),
      barcodeType: new FormControl(''),
      warranty: new FormControl(''),
      isEnableIMEI: new FormControl(true),
      isNotForSelling: new FormControl(true),
      isDisableWooCommerce: new FormControl(true),
      rack: new FormControl(''),
      row: new FormControl(''),
      position: new FormControl(''),
      newYorkRack: new FormControl(''),
      newYorkRow: new FormControl(''),
      newYorkPosition: new FormControl(''),
      glassGowRack: new FormControl(''),
      glassGowRow: new FormControl(''),
      glassGowPosition: new FormControl(''),
      weight: new FormControl(0),
      customField1: new FormControl(''),
      customField2: new FormControl(''),
      customField3: new FormControl(''),
      customField4: new FormControl(''),
      applicableTax: new FormControl(''),
      sellingPriceTaxType: new FormControl(''),
      productType: new FormControl(2),
      exclusiveTax: new FormControl(0),
      inclusiveTax: new FormControl(0),
      xMargin: new FormControl(0),
      defaultSellingPrice: new FormControl(0),
      createdBy: new FormControl(''),
      createdOn: new FormControl(''),
      updatedBy: new FormControl(''),
      updatedOn: new FormControl(''),
      is_Stock_Transfer: new FormControl(true)

   });


      // Reload Once
      if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
  }

  edit(row:any){
    this.upProform.patchValue({
      productName: row.productName,
      productdescription: row.productdescription,
      plu: row.plu,
      categorykeycode: row.categorykeycode,
      transactionunit: row.transactionunit,
      baseunit: row.baseunit
    });
  }
  UpProduct(keycode:any, data:any){
    console.log( "Form Submitted" ,keycode, data)
    this.api.upPro(keycode,data).subscribe((res)=>{
      console.log("Pro Updated" , res)
    })
  }

  // initializeForm(): void {
  //   this.upProform = new FormGroup({
  //     keycode: new FormControl(''), // Initialize with an empty string
  //     id: new FormControl(0),
  //     productSKUs: new FormArray([
  //       new FormGroup({
  //         productSKU: new FormControl('') // Initialize with an empty string
  //       })
  //     ]),
  //     productTaxes: new FormArray([]), // You can add FormGroup instances manually if needed
  //     // productLocations: new FormArray([
  //     //   new FormGroup({
  //     //     locationkeycode: new FormControl(null)
  //     //   })
  //     // ]),
  //     filePath: new FormControl(''),
  //     isActive: new FormControl(true),
  //     plu: new FormControl(''), // Initialize with an empty string
  //     productName: new FormControl(''), // Initialize with an empty string
  //     categorykeycode: new FormControl(''), // Initialize with an empty string
  //     subCategorykeycode: new FormControl(''),
  //     transactionunit: new FormControl(''),
  //     // Add more form controls as needed
  //   });
  // }
  // initializeForm(): void {
  //   this.upProform = this.formBuilder.group({
  //     keycode: [''], // Initialize with an empty string
  //     id: [0],
  //     productSKUs: this.formBuilder.array([
  //       this.formBuilder.group({
  //         productSKU: [''] // Initialize with an empty string
  //       })
  //     ]),
  //     productTaxes: this.formBuilder.array([
  //       // this.formBuilder.group({
  //       //   taxRatekeycode: []
  //       // })
  //     ]),
  //     // productLocations: this.formBuilder.array([
  //     //   this.formBuilder.group({
  //     //     locationkeycode: [null]
  //     //   })
  //     // ]),
  //     filePath: [''],
  //     isActive: [true],
  //     plu: [''],  // Initialize with an empty string
  //     productName: [''], // Initialize with an empty string
  //     categorykeycode: [''], // Initialize with an empty string
  //     subCategorykeycode: [''],
  //     brand: [''],
  //     casesize: [0],
  //     casecost: [0],
  //     caseallowance: [0],
  //     caseothercost: [0],
  //     netcasecost: [0],
  //     unitcase: [0],
  //     unitallowance: [0],
  //     othercase: [0],
  //     netcost: [0],
  //     retailprice: [0],
  //     margin: [0],
  //     netmargin: [0],
  //     saleperinvoice: [0],
  //     vendors: [''],
  //     taxnontax: [true],
  //     baseunit: [''],
  //     transactionunit: [''],
  //     businesslocations: [null],
  //     alertqty: [''],
  //     managestock: [true],
  //     closingStock: [0],
  //     weightitem: [true],
  //     wiceligible: [true],
  //     ingredient: [true],
  //     etbeligible: [true],
  //     activeitem: [true],
  //     showinmenu: [true],
  //     mergeItem: [true],
  //     inventory: [true],
  //     mustaskqty: [true],
  //     showinkiosk: [true],
  //     kitchenpartner: [true],
  //     onlineitem: [true],
  //     skusameasplu: [true],
  //     packageupc: [''],
  //     packageprice: [0],
  //     sku: [''],
  //     itemno: [0],
  //     rebategroup: [''],
  //     plugroup: [''],
  //     manufacturer: [''],
  //     mixmatchgroup: [''],
  //     type: [''],
  //     onhandqty: [0],
  //     packsize: [''],
  //     dealname: [''],
  //     loyaltydescription: [''],
  //     smartmenu: [''],
  //     loyaltypoint: [0],
  //     loyaltyamount: [0],
  //     itemingredient: [''],
  //     phototags: [null],
  //     inventorygroup: [''],
  //     tagalongitem: [''],
  //     productdescription: [''],
  //     productimage: [''],
  //     onspecial: [true],
  //     startdate: [''],
  //     enddate: [''],
  //     specialprice: [0],
  //     sendtoscale: [true],
  //     hotkey: [''],
  //     itemexpirein: [''],
  //     weightatscale: [true],
  //     barcodeType: [''],
  //     warranty: [''],
  //     isEnableIMEI: [true],
  //     isNotForSelling: [true],
  //     isDisableWooCommerce: [true],
  //     rack: [''],
  //     row: [''],
  //     position: [''],
  //     newYorkRack: [''],
  //     newYorkRow: [''],
  //     newYorkPosition: [''],
  //     glassGowRack: [''],
  //     glassGowRow: [''],
  //     glassGowPosition: [''],
  //     weight: [0],
  //     customField1: [''],
  //     customField2: [''],
  //     customField3: [''],
  //     customField4: [''],
  //     applicableTax: [''],
  //     sellingPriceTaxType: [''],
  //     productType: [2],
  //     exclusiveTax: [0],
  //     inclusiveTax: [0],
  //     xMargin: [0],
  //     defaultSellingPrice: [0],
  //     createdBy: [''],
  //     createdOn: [''],
  //     updatedBy: [''],
  //     updatedOn: [''],
  //     is_Stock_Transfer: [true]
  //   });
  // }

  getAll(){
    this.api.getAllpro().subscribe((res)=>{
      console.log("Products" , res)
      this.showPro = res;
    })
      
    }

    delPro(keycode:any){
      this.api.delPro(keycode).subscribe((res)=>{
        console.log("Pro Deleted" , res);
        alert("Product Deleted");
      })
    }
}
