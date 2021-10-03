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
  /* config: Config={
    apiUrl: '',
    createEndpoint: ''
  } */
  
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

  /* getUrlCreate() {
      this.getConfigFile().subscribe((data: Config) => {
      this.config = data
      console.log(this.config)
    })
    console.log(this.config)
  } */

  /* create(product: Product):Observable<Product>{
    let config: Config={
      apiUrl: '',
      createEndpoint: ''
    }  
    this.getConfigFile().subscribe(data =>{config = data
      console.log(config)
    })
    console.log(config)
    return this.http.post<Product>(`${config.apiUrl}${config.createEndpoint}`, product)
    
  }  */

  // Create sem pegar dados do config.json
 baseUrl = "http://localhost:3001/products"

  create(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }
 
  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product:Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product)
  }

  delete(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url)
  }

}
