import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VariationComponent } from './variation/variation.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule



@NgModule({
  declarations: [
    BrandComponent,
    VariationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports:[
    BrandComponent
  ]
})
export class ProductModule { }
