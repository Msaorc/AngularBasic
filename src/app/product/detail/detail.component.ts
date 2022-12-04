import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product: any
  constructor(private router:ActivatedRoute, private productService: ProductService){
    this.router.params.subscribe(params => {
      this.productService.getProductById(params['productId'])
      .then(res => this.product = res)
    })
  }

}
