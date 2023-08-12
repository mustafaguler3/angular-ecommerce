import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product?: Product;

  constructor(private shopService:ShopService,
              private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct(){
    const id = +this.activeRoute.snapshot.paramMap.get("id"); //+ means convert it to number
    
    if(id) {
      this.shopService.getProduct(id).subscribe(
        response => {
          this.product = response;
        },err => {
          console.log(err)
        }
      )
    }
  }

}
