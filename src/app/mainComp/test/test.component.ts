import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
removeSKU(_t24: number) {
throw new Error('Method not implemented.');
}
addSKU() {
throw new Error('Method not implemented.');
}
removeTax(_t41: number) {
throw new Error('Method not implemented.');
}
addTax() {
throw new Error('Method not implemented.');
}
removeLocation(_t58: number) {
throw new Error('Method not implemented.');
}
addLocation() {
throw new Error('Method not implemented.');
}

  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      keycode: [''],
      id: [0],
      productSKUs: this.formBuilder.array([
        this.formBuilder.group({
          productSKU: ['']
        })
      ]),
      productTaxes: this.formBuilder.array([
        this.formBuilder.group({
          taxRatekeycode: ['']
        })
      ]),
      productLocations: this.formBuilder.array([
        this.formBuilder.group({
          locationkeycode: ['']
        })
      ]),
      filePath: [''],
      isActive: [true],
      plu: [''],
      productName: [''],
      categorykeycode: [''],
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
      businesslocations: [''],
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
      phototags: [''],
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
      productType: [''],
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

  onSubmit() {
    console.log(this.productForm.value);
  }
}
