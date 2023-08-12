import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product?: Product;

  constructor(private shopService:ShopService,
              private activeRoute: ActivatedRoute,
              private bcService:BreadcrumbService){}

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct(){
    const id = +this.activeRoute.snapshot.paramMap.get("id"); //+ means convert it to number
    
    if(id) {
      this.shopService.getProduct(id).subscribe(
        response => {
          this.product = response;
          this.bcService.set('@productDetails',response.name);
        },err => {
          console.log(err)
        }
      )
    }
  }

}
