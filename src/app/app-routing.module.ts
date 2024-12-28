import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { HomeComponent } from './mainComp/home/home.component';
import { LoginComponent } from './mainComp/login/login.component';
import { CategoryComponent } from './product/category/category.component';
import { UnitComponent } from './product/unit/unit.component';
import { AddCategoryComponent } from './product/add-category/add-category.component';
import { ProductsComponent } from './product/products/products.component';
import { RolesComponent } from './user-managment/roles/roles.component';
import { UsersListingComponent } from './user-managment/users-listing/users-listing.component';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { BrandComponent } from './product/brand/brand.component';
import { VariationComponent } from './product/variation/variation.component';
import { ErrorCompComponent } from './mainComp/error-comp/error-comp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'addproduct',
    component: AddproductComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'addCategory',
    component: AddCategoryComponent,
  },
  {
    path: 'unit',
    component: UnitComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'userlisting',
    component: UsersListingComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'variation',
    component: VariationComponent,
  },
  {
    path: '**',
    component: ErrorCompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
