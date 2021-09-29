import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {ProductCrudComponent} from "./views/product-crud/product-crud.component";
import {TimeComponent} from "./views/time/time.component";

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path:"time",
  component: TimeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
