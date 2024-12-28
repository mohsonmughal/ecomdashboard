import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './mainComp/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './mainComp/login/login.component';
import { CategoryComponent } from './product/category/category.component';
import { UnitComponent } from './product/unit/unit.component';
import { AddCategoryComponent } from './product/add-category/add-category.component';
import { TestComponent } from './mainComp/test/test.component';
import { ProductsComponent } from './product/products/products.component';
import { UserManagmentModule } from './user-managment/user-managment.module';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { ErrorCompComponent } from './mainComp/error-comp/error-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    UnitComponent,
    AddCategoryComponent,
    TestComponent,
    ProductsComponent,
    ErrorCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserManagmentModule,
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
