import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {ProductCrudComponent} from "./views/product-crud/product-crud.component";
import {TimeComponent} from "./views/time/time.component";
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductRead2Component } from './components/products/product-read2/product-read2.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path:"exemplos",
  component: TimeComponent
},
{
  path:"products/create",
  component: ProductCreateComponent
},
{
  path:"products/read",
  component: ProductRead2Component
},
{
  path:"products/update/:id",
  component: ProductUpdateComponent
},
{
  path:"products/delete/:id",
  component: ProductDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
