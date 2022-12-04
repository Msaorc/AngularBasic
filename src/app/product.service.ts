import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://dummyjson.com/products'
  constructor(private httpClient:HttpClient) { }

  public async getAllProducts(){
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseUrl)
        .subscribe(res => resolve(res), 
        err => reject(err))
    })
  }

  public async getProductById(productId: any){
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.baseUrl}/${productId}`)
        .subscribe(res => resolve(res), 
        err => reject(err))
    })
  }
}
