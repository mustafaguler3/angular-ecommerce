import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  
  products?: Product[];
  brands!: Brand[];
  types!:Type[];
  brandIdSelected!:number;
  typeIdSelected!:number;
  shopParams = new ShopParams();
  totalCount?: any;

  sortSelected= "name"
  sortOptions = [
    {name:"Alphabetical",value:"name"},
    {name:"Price: Low to High",value:"priceAsc"},
    {name:"Price: High to Low",value:"priceDesc"}
  ]


  constructor(private shopService:ShopService){}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts().subscribe(res => {
      this.products = res
    },err => {
      console.log(err)
    })
  }

  /*getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(res => {
      this.products = res?.data;
      this.shopParams.pageNumber = res?.pageIndex;
      this.shopParams.pageSize = res?.pageSize;
      this.totalCount = res?.count;
    },err => {
      console.log(err)
    })
  }*/

  getBrands(){
    this.shopService.getBrands().subscribe(
      res => {
        this.brands = res;
      },err => {
        console.log(err)
      }
    )
  }

  getTypes(){
    this.shopService.getTypes().subscribe(
      res => {
        this.types = res;
      },err => {
        console.log(err)
      }
    )
  }

  onBrandSelected(brandId: number){
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId:number){
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(sort:string){
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event:any){
    this.shopParams.pageNumber = event.page;
    this.getProducts();
  }
}
