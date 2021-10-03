import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private productService: ProductService) { }

  product: Product ={
    name:'',
    price:0
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    id == null? id = '': this.productService.readById(id).subscribe(p => this.product = p)
  }

  deleteProduct():void {
    this.productService.delete(this.product).subscribe(() => this.router.navigate(["/products"]))
  }

  cancel():void{
    this.router.navigate(["/products"])
  }

}
