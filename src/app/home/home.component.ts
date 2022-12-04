import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: any = []

  constructor(private productService: ProductService){
    this.productService.getAllProducts()
    .then((res:any) => this.products = res['products'])
  }

  recebendoDeVolta(event: any){
    alert(event)
  }

  ngOnInit(): void {

  }
}
