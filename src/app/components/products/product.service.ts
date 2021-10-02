import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { Config } from 'src/app/config/config.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }

  configUrl = "./assets/config.json";
  config: Config | undefined
  
  showMessage(msg: string): void{
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

    getConfigFile():Observable<Config>{
    return this.http.get<Config>(this.configUrl)
  } 

  getUrlCreate() {
      this.getConfigFile().subscribe((data) => this.config = {
      apiUrl: (data as any).apiUrl,
      createEndpoint: (data as any).createEndpoint
    })
  }

  /* create(product: Product)Observable<Product>{
       
    this.getConfigFile().subscribe(data => console.log(data)) 
        
    return this.getConfigFile().subscribe((data: Config) => this.http.post<Product>(data.apiUrl+data.createEndpoint, product))
    
  }  */

  // Create sem pegar dados do config.json
 baseUrl = "http://localhost:3001/products"

  create(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }
 

}
